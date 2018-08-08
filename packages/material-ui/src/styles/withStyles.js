import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import warning from 'warning';
import hoistNonReactStatics from 'hoist-non-react-statics';
import wrapDisplayName from 'recompose/wrapDisplayName';
import mergeClasses from './mergeClasses';
import createMuiTheme from './createMuiTheme';
import themeListener from './themeListener';
import getStylesCreator from './getStylesCreator';
import getThemeProps from './getThemeProps';
import { createRenderer } from 'fela-native';
import getClassSheet from './getClassSheet';
import customProperty from 'fela-plugin-custom-property';
import customModules from './fela-plugin-custom-modules';
import expandShorthand, { conditionalExpander, cast } from './shorthand-properties';
import resolveMediaQueries from './resolveMediaQueries';

const validNumber = numberString => Number.isFinite(Number(numberString));

const capitalize = lower => lower.replace(/^\w/, c => c.toUpperCase());

const borders = ['top', 'right', 'bottom', 'left'].reduce(
  (bs, side) => {
    const pre = `border${capitalize(side)}`;
    bs[pre] = expandShorthand(`border-${side}`, {
      [`${pre}Width`]: cast.toNumber,
    });
    return bs;
  },
  {
    border: expandShorthand('border', {
      borderWidth: cast.toNumber,
    }),
  },
);

// Default fela renderer
const felaRenderer = createRenderer({
  plugins: [
    customProperty({
      transform: () => ({}),
      willChange: () => ({}),
      pointerEvents: () => ({}),
      fontFamily: () => ({}),
      transition: () => ({}),
      animation: () => ({}),
      flip: () => ({}),
      fontWeight(prop) {
        return {
          fontWeight: typeof prop === 'number' ? prop.toString() : prop,
        };
      },
      ...borders,
      margin: conditionalExpander('margin', margin => typeof margin !== 'number'),
      padding: conditionalExpander('padding', margin => typeof margin !== 'number'),
      flex(prop) {
        if (typeof prop !== 'string') {
          return { flex: prop };
        }
        const [flexGrow, flexShrink = undefined, _flexBasis = undefined] = prop.split(/\s+/);
        let flexBasis = _flexBasis;
        let expandedStyles = {};

        // handle flexGrow
        if (!(flexGrow && validNumber(flexGrow))) {
          warning(
            true,
            [
              `Material-UI: invalid flex shorthand "${prop}",`,
              'must be <grow number> <shrink number>? <basis>?',
            ].join('\n'),
          );
          return {};
        }
        expandedStyles.flexGrow = Number(flexGrow);

        // handle flexShrink
        if (flexShrink) {
          if (validNumber(flexShrink)) {
            // flexShrink is valid number
            expandedStyles.flexShrink = Number(flexShrink);
          } else if (flexShrink && !flexBasis) {
            // flexShrink position might be valid flexBasis
            flexBasis = flexShrink;
          }
        }

        // handle flexBasis. TODO valid string values unknown
        if (flexBasis && flexBasis !== 'auto') {
          expandedStyles = validNumber(flexShrink) ? Number(flexShrink) : flexShrink;
        }
        return expandedStyles;
      },
    }),
    customModules([['[', () => ({})], ['#', () => ({})], ['@', () => ({})], ['&', () => ({})]]),
  ],
});

// We use the same empty object to ref count the styles that don't need a theme object.
const noopTheme = {};

// In order to have self-supporting components, we rely on default theme when not provided.
let defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = createMuiTheme();
  return defaultTheme;
}

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.
const withStyles = (stylesOrCreator, options = {}) => Component => {
  const { withTheme = false, name } = options;
  const stylesCreator = getStylesCreator(stylesOrCreator);
  const listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';

  class WithStyles extends React.Component {
    extensions = { mediaQuery: false, mediaQueryListener: false };

    disableStylesGeneration = false;

    felaRenderer = null;

    stylesCreatorSaved = null;

    theme = null;

    unsubscribeId = null;

    constructor(props, context) {
      super(props, context);

      this.felaRenderer = this.context.renderer || felaRenderer;

      const { muiThemeProviderOptions } = this.context;
      if (muiThemeProviderOptions) {
        this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
      }

      // Attach the stylesCreator to the instance of the component as in the context
      // of react-hot-loader the hooks can be executed in a different closure context:
      // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
      this.stylesCreatorSaved = stylesCreator;

      // We use || as the function call is lazy evaluated.
      this.theme = listenToTheme ? themeListener.initial(context) || getDefaultTheme() : noopTheme;

      this.computeClasses(this.theme);

      this.cacheClasses = {
        // Cache for the finalized classes value.
        value: null,
        // Cache for the last used classes prop pointer.
        lastProp: null,
        // Cache for the last used rendered classes pointer.
        lastFela: {},
      };

      if (this.extensions.mediaQuery) {
        this.extensions.mediaQueryListener =
          Dimensions.addEventListener('change', this.forceComputeClasses.bind(this)) || true;
      }
    }

    state = { mounted: false };

    componentDidMount() {
      this.setState({ mounted: true });

      if (!listenToTheme) {
        return;
      }

      this.unsubscribeId = themeListener.subscribe(this.context, theme => {
        this.theme = theme;
        this.computeClasses(this.theme);
        this.forceUpdate();
      });
    }

    componentDidUpdate() {
      // react-hot-loader specific logic
      if (this.stylesCreatorSaved === stylesCreator || process.env.NODE_ENV === 'production') {
        return;
      }

      this.stylesCreatorSaved = stylesCreator;
      this.computeClasses(this.theme);
      this.forceUpdate();
    }

    componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        themeListener.unsubscribe(this.context, this.unsubscribeId);
      }

      if (this.extensions.mediaQueryListener) {
        Dimensions.removeEventListener('change', this.forceComputeClasses.bind(this));
        this.extensions.mediaQueryListener = false;
      }
    }

    getClasses() {
      // Tracks if either the rendered classes or classes prop has changed,
      // requiring the generation of a new finalized classes object.
      let generate = false;

      if (!this.disableStylesGeneration) {
        if (this.classSheet !== this.cacheClasses.lastFela) {
          this.cacheClasses.lastFela = this.classSheet;
          generate = true;
        }
      }

      if (this.props.classes !== this.cacheClasses.lastProp) {
        this.cacheClasses.lastProp = this.props.classes;
        generate = true;
      }

      if (generate) {
        this.cacheClasses.value = mergeClasses({
          baseClasses: this.cacheClasses.lastFela,
          newClasses: this.props.classes,
          Component,
          noBase: this.disableStylesGeneration,
        });
      }

      return this.cacheClasses.value;
    }

    forceComputeClasses() {
      if (this.state.mounted) {
        // if (name === 'MuiGrid') console.log('Grid retatch');
        this.computeClasses(this.theme);
        this.forceUpdate();
      } else {
        // if (name === 'MuiGrid') console.log('Grid fail');
        // debugger;
      }
    }

    computeClasses(theme) {
      if (this.disableStylesGeneration) {
        return;
      }

      const stylesCreatorSaved = this.stylesCreatorSaved;
      const styles = stylesCreatorSaved.create(theme, name);
      const { resolved, containsMediaQueries } = resolveMediaQueries(styles);

      const classSheet = getClassSheet(resolved, this.felaRenderer);

      this.classSheet = classSheet;

      // look for media queries
      this.extensions.mediaQuery = containsMediaQueries;
    }

    render() {
      const { classes, innerRef, ...other } = this.props;

      const more = getThemeProps({ theme: this.theme, name });

      // Provide the theme to the wrapped component.
      // So we don't have to use the `withTheme()` Higher-order Component.
      if (withTheme) {
        more.theme = this.theme;
      }

      return <Component {...more} classes={this.getClasses()} ref={innerRef} {...other} />;
    }
  }

  WithStyles.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * Use that property to pass a ref callback to the decorated component.
     */
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  WithStyles.contextTypes = {
    muiThemeProviderOptions: PropTypes.object,
    ...(listenToTheme ? themeListener.contextTypes : {}),
  };

  if (process.env.NODE_ENV !== 'production') {
    WithStyles.displayName = wrapDisplayName(Component, 'WithStyles');
  }

  hoistNonReactStatics(WithStyles, Component);

  if (process.env.NODE_ENV !== 'production') {
    // Exposed for test purposes.
    WithStyles.Naked = Component;
    WithStyles.options = options;
  }

  return WithStyles;
};

export default withStyles;
