import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    overflowY: 'auto',

    padding: '0 24px 24px',
    '&:first-child': {
      paddingTop: 24,
    },
  },
};

function DialogContent(props) {
  const { classes, children, style, ...other } = props;

  return (
    <View style={styleNames(classes.root, style)} {...other}>
      {children}
    </View>
  );
}

DialogContent.propTypes = {
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
};

export default withStyles(styles, { name: 'MuiDialogContent' })(DialogContent);
