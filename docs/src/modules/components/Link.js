/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from 'react-native-style-names';
import compose from 'recompose/compose';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  default: {
    color: 'inherit',
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  button: {
    '&:hover': {
      textDecoration: 'inherit',
    },
  },
});

function Link(props) {
  const {
    activeStyle,
    children: childrenProp,
    classes,
    style: styleProp,
    component: ComponentProp,
    href,
    onClick,
    prefetch,
    router,
    variant,
    ...other
  } = props;

  let ComponentRoot;
  const style = styleNames(classes.root, classes[variant], styleProp);
  let RootProps;
  let children = childrenProp;

  if (ComponentProp) {
    ComponentRoot = ComponentProp;
    RootProps = {
      ...other,
      style: styleProp,
    };
  } else if (href) {
    ComponentRoot = NextLink;
    RootProps = {
      href,
      prefetch,
      passHref: true,
    };
    children = (
      <Text
        style={styleNames(style, router.pathname === href && activeStyle)}
        onClick={onClick}
        {...other}
      >
        {children}
      </Text>
    );
  } else {
    ComponentRoot = Text;
    RootProps = {
      ...other,
      style: styleProp,
    };
  }

  return <ComponentRoot {...RootProps}>{children}</ComponentRoot>;
}

Link.defaultProps = {
  variant: 'default',
};

Link.propTypes = {
  // activeStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.any,
  href: PropTypes.string,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'button']),
};

export default compose(
  withRouter,
  withStyles(styles),
)(Link);
