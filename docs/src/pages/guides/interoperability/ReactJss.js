import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss/lib/injectSheet';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function ReactJss(props) {
  return (
    <View>
      <Button>Material-UI</Button>
      <Button style={props.classes.button}>react-jss</Button>
    </View>
  );
}

ReactJss.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(ReactJss);
