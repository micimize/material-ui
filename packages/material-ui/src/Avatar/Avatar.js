import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from 'react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(20),
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none',
  },
  /* Styles applied to the root element if there are children and not `src` or `srcSet` */
  /* Styles applied to the root element if `color="default"`. */
  colorDefault: {
    color: theme.palette.background.default,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600],
  },
  /* Styles applied to the img element if either `src` or `srcSet` is defined. */
  img: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // Handle non-square image. The property isn't supported by IE11.
    objectFit: 'cover',
  },
});

function Avatar(props) {
  const {
    alt,
    children: childrenProp,
    childrenClassName: childrenstyleProp,
    classes,
    style: styleProp,
    component: Component,
    imgProps,
    sizes,
    src,
    srcSet,
    ...other
  } = props;

  const className = styleNames(
    classes.root,
    {
      [classes.colorDefault]: childrenProp && !src && !srcSet,
    },
    styleProp,
  );
  let children = null;

  if (childrenProp) {
    if (
      childrenstyleProp &&
      typeof childrenProp !== 'string' &&
      React.isValidElement(childrenProp)
    ) {
      const childrenClassName = styleNames(childrenstyleProp, childrenProp.props.style);
      children = React.cloneElement(childrenProp, { style: childrenClassName });
    } else {
      children = childrenProp;
    }
  } else if (src || srcSet) {
    children = (
      <img
        alt={alt}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        style={classes.img}
        {...imgProps}
      />
    );
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
  childrenClassName: PropTypes.string,
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
