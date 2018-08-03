import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import classNames from 'react-native-style-names';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

class FontAwesome extends React.Component {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <View style={classes.root}>
        <Icon style={classNames(classes.icon, 'fa fa-plus-circle')} />
        <Icon style={classNames(classes.icon, 'fa fa-plus-circle')} color="primary" />
        <Icon style={classNames(classes.icon, 'fa fa-plus-circle')} color="secondary" />
        <Icon style={classNames(classes.icon, 'fa fa-plus-circle')} color="action" />
        <Icon
          style={classNames(classes.iconHover, 'fa fa-plus-circle')}
          color="error"
          style={{ fontSize: 30 }}
        />
        <Icon
          style={classNames(classes.icon, 'fa fa-plus-circle')}
          color="disabled"
          style={{ fontSize: 36 }}
        />
      </View>
    );
  }
}

FontAwesome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FontAwesome);
