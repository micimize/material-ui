import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    // userSelect: 'none',
    // fontFamily: theme.typography.fontFamily,
  },
  /* Styles applied to the root element if there are children and not `source` */
  /* Styles applied to the root element if `color="default"`. */
  colorDefault: {
    // color: theme.palette.background.default,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600],
  },
  /* Styles applied to the img element if either `source` is defined. */
  img: {
    width: '100%',
    height: '100%',
  },
});

function Avatar(props) {
  const {
    alt,
    children: childrenProp,
    childrenClassName: childrenStyleProp,
    classes,
    style: styleProp,
    component: Component,
    imgProps,
    sizes,
    source,
    ...other
  } = props;

  const className = styleNames(
    classes.root,
    {
      [classes.colorDefault]: childrenProp && !source,
    },
    styleProp,
  );
  let children = null;

  if (childrenProp) {
    if (
      childrenStyleProp &&
      typeof childrenProp !== 'string' &&
      React.isValidElement(childrenProp)
    ) {
      const childrenClassName = styleNames(childrenStyleProp, childrenProp.props.style);
      children = React.cloneElement(childrenProp, { style: childrenClassName });
    } else {
      children = childrenProp;
    }
  } else if (source) {
    children = <Image alt={alt} source={source} sizes={sizes} style={classes.img} {...imgProps} />;
  }

  return (
    <Component style={className} {...other}>
      {children}
    </Component>
  );
}

Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: PropTypes.string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName: PropTypes.any,
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
   * Attributes applied to the `img` element if the component
   * is used to display an image.
   */
  imgProps: PropTypes.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: PropTypes.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: PropTypes.string,
  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: PropTypes.string,
};

Avatar.defaultProps = {
  component: View,
};

export default withStyles(styles, { name: 'MuiAvatar' })(Avatar);
