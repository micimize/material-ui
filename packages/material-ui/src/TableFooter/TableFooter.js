import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import classNames from 'react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-footer-group',
  },
};

class TableFooter extends React.Component {
  getChildContext() {
    // eslint-disable-line class-methods-use-this
    return {
      table: {
        footer: true,
      },
    };
  }

  render() {
    const { classes, style, component: Component, ...other } = this.props;

    return <Component style={classNames(classes.root, className)} {...other} />;
  }
}

TableFooter.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
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
};

TableFooter.defaultProps = {
  component: 'tfoot',
};

TableFooter.childContextTypes = {
  table: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiTableFooter' })(TableFooter);
