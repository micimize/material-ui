import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// 1. We define the styles.
const styles = theme => ({
  root: {
    color: 'inherit',
    // textDecorationLine: 'inherit',
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  primary: {
    color: theme.palette.primary.main,
  },
});

function MyLink(props) {
  const { children, classes, style, variant, ...other } = props;

  return (
    <Text
      style={styleNames(
        classes.root,
        {
          [classes.primary]: variant === 'primary',
        },
        style,
      )}
      {...other}
    >
      {children}
    </Text>
  );
}

MyLink.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary']),
};

// 2. We inject the styles.
const MyLinkStyled = withStyles(styles)(MyLink);

export default function CssInJs() {
  return (
    <Typography variant="subheading">
      <MyLinkStyled href="#">MyLink</MyLinkStyled>
      {' - '}
      <MyLinkStyled href="#" variant="primary">
        {'primary'}
      </MyLinkStyled>
    </Typography>
  );
}
