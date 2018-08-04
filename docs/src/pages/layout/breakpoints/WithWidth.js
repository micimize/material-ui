import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const components = {
  sm: Text,
  md: Text,
  lg: Text,
};

function WithWidth(props) {
  const { width } = props;
  const Component = components[width] || View;

  return (
    <Typography variant="subheading">
      <Component>{`Current width: ${width}`}</Component>
    </Typography>
  );
}

WithWidth.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(WithWidth);
