import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const noop = () => {};

const styles = theme => ({
  root: {
    width: 600,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
});

function SimpleTabs(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Paper style={classes.appBar}>
        <Tabs onChange={noop} value={0}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" disabled />
        </Tabs>
      </Paper>
      <Paper style={classes.root}>
        <Tabs onChange={noop} value={1} textColor="secondary" centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" disabled />
        </Tabs>
      </Paper>
      <Paper>
        <Tabs onChange={noop} value={2} textColor="secondary" fullWidth>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
      <Paper>
        <Tabs onChange={noop} value={0} textColor="secondary" fullWidth>
          <Tab icon={<Icon>phone</Icon>} />
          <Tab icon={<Icon>favorite</Icon>} />
          <Tab icon={<Icon>person_pin</Icon>} disabled />
        </Tabs>
      </Paper>
      <Paper>
        <Tabs onChange={noop} value={1} fullWidth textColor="secondary">
          <Tab icon={<Icon>phone</Icon>} label="RECENTS" />
          <Tab icon={<Icon>favorite</Icon>} label="FAVORITES" />
          <Tab icon={<Icon>person_pin</Icon>} label="NEARBY" disabled />
        </Tabs>
      </Paper>
    </View>
  );
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
