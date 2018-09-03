// @inheritedComponent ButtonBase

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';
import unsupportedProp from '../utils/unsupportedProp';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    maxWidth: 264,
    position: 'relative',
    minWidth: 72,
    padding: 0,
    minHeight: 48,
    flexShrink: 0,
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      minWidth: 160,
    },
  },
  /* Styles applied to the root element if both `icon` and `label` are provided. */
  labelIcon: {
    minHeight: 72,
  },
  /* Styles applied to the root element if `textColor="inherit"`. */
  textColorInherit: {
    // color: 'inherit',
    opacity: 0.7,
    '[selected="true"]': {
      opacity: 1,
    },
    '[disabled="true"]': {
      opacity: 0.4,
    },
  },
  /* Styles applied to the root element if `textColor="primary"`. */
  textColorPrimary: {
    color: theme.palette.text.secondary,
    '[selected="true"]': {
      color: theme.palette.primary.main,
    },
    '[disabled="true"]': {
      color: theme.palette.text.disabled,
    },
  },
  /* Styles applied to the root element if `textColor="secondary"`. */
  textColorSecondary: {
    color: theme.palette.text.secondary,
    '[selected="true"]': {
      color: theme.palette.secondary.main,
    },
    '[disabled="true"]': {
      color: theme.palette.text.disabled,
    },
  },
  /* Styles applied to the root element if `selected={true}` (controlled by the Tabs component). */
  selected: {},
  /* Styles applied to the root element if `disabled={true}` (controlled by the Tabs component). */
  disabled: {},
  /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
  fullWidth: {
    flexShrink: 1,
    flexGrow: 1,
    maxWidth: 'auto',
  },
  /* Styles applied to the `icon` and `label`'s wrapper element. */
  wrapper: {
    // // display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  /* Styles applied to the label container element if `label` is provided. */
  labelContainer: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  /* Styles applied to the label wrapper element if `label` is provided. */
  label: {
    ...theme.typography.button,
    fontSize: 14,
    // whiteSpace: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: 13,
    },
  },
  /* Styles applied to the label wrapper element if `label` is provided and the text is wrapped. */
  labelWrapped: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
});

class Tab extends React.Component {
  label = null;

  state = {
    // labelWrapped: false,
  };

  /* TODO it isn't clear to me how we want to detect andstyle wrapped text in react native
  componentDidMount() {
    this.checkTextWrap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.labelWrapped === prevState.labelWrapped) {
      /**
       * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
       * font size still only requires one line.  This check will prevent an infinite render loop
       * fron occurring in that scenario.
       * /
      this.checkTextWrap();
    }
  }
  */

  handleChange = event => {
    const { onChange, value, onClick } = this.props;

    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  /*
  checkTextWrap = () => {
    if (this.labelRef) {
      const labelWrapped = this.labelRef.getClientRects().length > 1;
      if (this.state.labelWrapped !== labelWrapped) {
        this.setState({ labelWrapped });
      }
    }
  };
  */

  render() {
    const {
      classes,
      style: styleProp,
      disabled,
      fullWidth,
      icon,
      indicator,
      label: labelProp,
      onChange,
      selected,
      textColor,
      value,
      ...other
    } = this.props;

    let label;

    if (labelProp !== undefined) {
      label = (
        <Text style={classes.labelContainer}>
          <Text
            style={styleNames(classes.label)}
            ref={ref => {
              this.labelRef = ref;
            }}
          >
            {labelProp}
          </Text>
        </Text>
      );
    }

    const className = styleNames(
      classes.root,
      {
        [classes.disabled]: disabled,
        [classes.selected]: selected,
        [classes.labelIcon]: icon && label,
        [classes.fullWidth]: fullWidth,
      },
      styleProp,
    );

    const textClassName = styleNames(classes.wrapper, classes[`textColor${capitalize(textColor)}`]);

    return (
      <ButtonBase
        focusRipple
        style={className}
        role="tab"
        aria-selected={selected}
        disabled={disabled}
        {...other}
        onClick={this.handleChange}
      >
        <Text style={textClassName}>
          {icon}
          {label}
        </Text>
        {indicator}
      </ButtonBase>
    );
  }
}

Tab.propTypes = {
  /**
   * This property isn't supported.
   * Use the `component` property if you need to change the children structure.
   */
  children: unsupportedProp,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the tab will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  fullWidth: PropTypes.bool,
  /**
   * The icon element.
   */
  icon: PropTypes.node,
  /**
   * @ignore
   * For server side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: PropTypes.node,
  /**
   * The label element.
   */
  label: PropTypes.node,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  selected: PropTypes.bool,
  /**
   * @ignore
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'onSecondary', 'onPrimary']),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: PropTypes.any,
};

Tab.defaultProps = {
  disabled: false,
  textColor: 'inherit',
};

export default withStyles(styles, { name: 'MuiTab' })(Tab);
