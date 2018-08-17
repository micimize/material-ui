/* eslint-disable no-restricted-globals */

import React from 'react';
import { getBoundingClientRect, layoutToBoundingRect } from '../utils/reactHelpers';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import warning from 'warning';
import styleNames from '../styles/react-native-style-names';
import EventListener from 'react-event-listener';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.
import { getNormalizedScrollLeft, detectScrollType } from 'normalize-scroll-left';
import animate from '../internal/animate';
import ScrollbarSize from './ScrollbarSize';
import withStyles from '../styles/withStyles';
import TabIndicator from './TabIndicator';
import TabScrollButton from './TabScrollButton';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden',
    minHeight: 48,
  },
  /* Styles applied to the flex container element. */
  flexContainer: {
    flexDirection: 'row',
  },
  /* Styles applied to the flex container element if `centered={true}` & `scrollable={false}`. */
  centered: {
    justifyContent: 'center',
  },
  /* Styles applied to the tablist element. */
  scroller: {
    position: 'relative',
    flex: '1 1 auto',
  },
  /* Styles applied to the tablist element if `scrollable={false}`. */
  fixed: {
    overflowX: 'hidden',
    width: '100%',
  },
  /* Styles applied to the tablist element if `scrollable={true}`. */
  scrollable: {
    overflowX: 'scroll',
  },
  /* Styles applied to the `ScrollButtonComponent` component. */
  scrollButtons: {},
  /* Styles applied to the `ScrollButtonComponent` component if `sscrollButtons="auto"`. */
  scrollButtonsAuto: {},
  /* Styles applied to the `TabIndicator` component. */
  indicator: {},
});

class Tabs extends React.Component {
  tabs = null; // TODO seems to be unused

  // TODO move from refs to onLayout
  tabData = [];

  valueToIndex = new Map();

  handleResize = debounce(() => {
    this.updateIndicatorState(this.props);
    this.updateScrollButtonState();
  }, 166); // Corresponds to 10 frames at 60 Hz.

  handleTabsScroll = debounce(() => {
    this.updateScrollButtonState();
  }, 166); // Corresponds to 10 frames at 60 Hz.

  state = {
    indicatorStyle: {},
    scrollerStyle: {
      marginBottom: 0,
    },
    showLeftScroll: false,
    showRightScroll: false,
    mounted: false,
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ mounted: true });

    this.updateIndicatorState(this.props);
    this.updateScrollButtonState();

    if (this.props.action) {
      this.props.action({
        updateIndicator: this.handleResize,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // The index might have changed at the same time.
    // We need to check again the right indicator position.
    this.updateIndicatorState(this.props).then(() => {
      if (this.state.indicatorStyle !== prevState.indicatorStyle) {
        this.scrollSelectedIntoView();
      }
    });

    this.updateScrollButtonState();
  }

  componentWillUnmount() {
    this.handleResize.clear();
    this.handleTabsScroll.clear();
  }

  getConditionalElements = () => {
    const { classes, scrollable, ScrollButtonComponent, scrollButtons, theme } = this.props;
    const conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? (
      <ScrollbarSize
        onLoad={this.handleScrollbarSizeChange}
        onChange={this.handleScrollbarSizeChange}
      />
    ) : null;

    const showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');

    conditionalElements.scrollButtonLeft = showScrollButtons ? (
      <ScrollButtonComponent
        direction={theme && theme.direction === 'rtl' ? 'right' : 'left'}
        onClick={this.handleLeftScrollClick}
        visible={this.state.showLeftScroll}
        style={styleNames(classes.scrollButtons, {
          [classes.scrollButtonsAuto]: scrollButtons === 'auto',
        })}
      />
    ) : null;

    conditionalElements.scrollButtonRight = showScrollButtons ? (
      <ScrollButtonComponent
        direction={theme && theme.direction === 'rtl' ? 'left' : 'right'}
        onClick={this.handleRightScrollClick}
        visible={this.state.showRightScroll}
        style={styleNames(classes.scrollButtons, {
          [classes.scrollButtonsAuto]: scrollButtons === 'auto',
        })}
      />
    ) : null;

    return conditionalElements;
  };

  getTabsMeta = async (value, direction) => {
    let tabsMeta;
    if (this.tabsRef) {
      const rect = await getBoundingClientRect(this.tabsRef);
      // create a new object with ClientRect class props + scrollLeft
      // TODO find clientWidth and scrollProperty equivalents for react-native
      tabsMeta = {
        clientWidth: rect.width, // this.tabsRef.clientWidth,
        scrollLeft: 0, // this.tabsRef.scrollLeft,
        scrollLeftNormalized: 0, // getNormalizedScrollLeft(this.tabsRef, direction),
        scrollWidth: rect.width, // this.tabsRef.scrollWidth,
        left: rect.left,
        right: rect.right,
      };
    }

    let tabMeta;
    if (this.tabsRef && value !== false) {
      if (this.tabData.length > 0) {
        tabMeta = this.tabData[this.valueToIndex.get(value)];
        // warning(tabMeta, `Material-UI: the value provided \`${value}\` is invalid`);
      }
    }

    return { tabsMeta, tabMeta };
  };

  handleLeftScrollClick = () => {
    this.moveTabsScroll(-this.tabsRef.clientWidth);
  };

  handleRightScrollClick = () => {
    this.moveTabsScroll(this.tabsRef.clientWidth);
  };

  handleScrollbarSizeChange = ({ scrollbarHeight }) => {
    this.setState({
      scrollerStyle: {
        marginBottom: -scrollbarHeight,
      },
    });
  };

  moveTabsScroll = delta => {
    const { theme } = this.props;

    const multiplier = theme.direction === 'rtl' ? -1 : 1;
    const nextScrollLeft = this.tabsRef.scrollLeft + delta * multiplier;
    // Fix for Edge
    const invert = theme.direction === 'rtl' && detectScrollType() === 'reverse' ? -1 : 1;
    this.scroll(invert * nextScrollLeft);
  };

  scrollSelectedIntoView = async () => {
    const { theme, value } = this.props;
    const { tabsMeta, tabMeta } = await this.getTabsMeta(value, theme.direction);

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta.left < tabsMeta.left) {
      // left side of button is out of view
      const nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
      this.scroll(nextScrollLeft);
    } else if (tabMeta.right > tabsMeta.right) {
      // right side of button is out of view
      const nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
      this.scroll(nextScrollLeft);
    }
  };

  scroll = value => {
    animate('scrollLeft', this.tabsRef, value);
  };

  updateScrollButtonState = () => {
    const { scrollable, scrollButtons, theme } = this.props;

    if (scrollable && scrollButtons !== 'off') {
      const { scrollWidth, clientWidth } = this.tabsRef;
      const scrollLeft = getNormalizedScrollLeft(this.tabsRef, theme.direction);

      const showLeftScroll =
        theme.direction === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;

      const showRightScroll =
        theme.direction === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

      if (
        showLeftScroll !== this.state.showLeftScroll ||
        showRightScroll !== this.state.showRightScroll
      ) {
        this.setState({ showLeftScroll, showRightScroll });
      }
    }
  };

  updateIndicatorState = async props => {
    const { theme, value } = props;

    const { tabsMeta, tabMeta } = await this.getTabsMeta(value, theme.direction);
    let left = 0;

    if (tabMeta && tabsMeta) {
      const correction =
        theme.direction === 'rtl'
          ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth
          : tabsMeta.scrollLeft;
      left = Math.round(tabMeta.left - tabsMeta.left + correction);
    }

    const indicatorStyle = {
      left,
      // May be wrong until the font is loaded.
      width: tabMeta ? Math.round(tabMeta.width) : 0,
    };

    if (
      (indicatorStyle.left !== this.state.indicatorStyle.left ||
        indicatorStyle.width !== this.state.indicatorStyle.width) &&
      !isNaN(indicatorStyle.left) &&
      !isNaN(indicatorStyle.width)
    ) {
      this.setState({ indicatorStyle });
    }
  };

  render() {
    const {
      action,
      centered,
      children: childrenProp,
      classes,
      style: styleProp,
      component: Component,
      fullWidth,
      indicatorColor,
      onChange,
      scrollable,
      ScrollButtonComponent,
      scrollButtons,
      TabIndicatorProps = {},
      textColor,
      theme,
      value,
      ...other
    } = this.props;

    warning(
      !centered || !scrollable,
      'Material-UI: you can not use the `centered={true}` and `scrollable={true}` properties ' +
        'at the same time on a `Tabs` component.',
    );

    const className = styleNames(classes.root, styleProp);
    const flexContainerClassName = styleNames(classes.flexContainer, {
      [classes.centered]: centered && !scrollable,
    });
    const scrollerClassName = styleNames(classes.scroller, {
      [classes.fixed]: !scrollable,
      [classes.scrollable]: scrollable,
    });

    const indicator = (
      <TabIndicator
        style={styleNames(classes.indicator, this.state.indicatorStyle, TabIndicatorProps.style)}
        color={indicatorColor}
        {...TabIndicatorProps}
      />
    );

    this.valueToIndex = new Map();

    // avoid incrementing on invalid elements
    let childIndex = 0;
    const children = React.Children.map(childrenProp, child => {
      if (!React.isValidElement(child)) {
        return null;
      }

      warning(
        child.type !== React.Fragment,
        [
          "Material-UI: the Tabs component doesn't accept a Fragment as a child.",
          'Consider providing an array instead.',
        ].join('\n'),
      );

      const childValue = child.props.value === undefined ? childIndex : child.props.value;
      this.valueToIndex.set(childValue, childIndex);
      const selected = childValue === value;

      const refTarget = childIndex;
      childIndex += 1;
      return React.cloneElement(child, {
        fullWidth,
        indicator: selected && !this.state.mounted && indicator,
        selected,
        onChange,
        textColor,
        value: childValue,
        onLayout: layout => {
          this.tabData[refTarget] = layoutToBoundingRect(layout);
          this.getTabsMeta();
        },
      });
    });

    const conditionalElements = this.getConditionalElements();

    return (
      <Component style={className} {...other}>
        <EventListener target="window" onResize={this.handleResize} />
        {conditionalElements.scrollbarSizeListener}
        <View style={classes.flexContainer}>
          {conditionalElements.scrollButtonLeft}
          <View
            style={styleNames(scrollerClassName, this.state.scrollerStyle)}
            ref={ref => {
              this.tabsRef = ref;
            }}
            role="tablist"
            onScroll={this.handleTabsScroll}
          >
            <View style={flexContainerClassName}>{children}</View>
            {this.state.mounted && indicator}
          </View>
          {conditionalElements.scrollButtonRight}
        </View>
      </Component>
    );
  }
}

Tabs.propTypes = {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `updateIndicator()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: PropTypes.func,
  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: PropTypes.bool,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the tabs will grow to use all the available space.
   * This property is intended for small views, like on mobile.
   */
  fullWidth: PropTypes.bool,
  /**
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {number} value We default to the index of the child
   */
  onChange: PropTypes.func,
  /**
   * True invokes scrolling properties and allow for horizontally scrolling
   * (or swiping) the tab bar.
   */
  scrollable: PropTypes.bool,
  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),
  /**
   * Properties applied to the `TabIndicator` element.
   */
  TabIndicatorProps: PropTypes.object,
  /**
   * Determines the color of the `Tab`.
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: PropTypes.any,
};

Tabs.defaultProps = {
  centered: false,
  component: View,
  fullWidth: false,
  indicatorColor: 'secondary',
  scrollable: false,
  ScrollButtonComponent: TabScrollButton,
  scrollButtons: 'auto',
  textColor: 'inherit',
};

export default withStyles(styles, { name: 'MuiTabs', withTheme: true })(Tabs);
