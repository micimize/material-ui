import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
});

function AutoGridNoWrap(props) {
  const { classes } = props;
  const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;

  return (
    <View className={classes.root}>
      <View className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </View>
    </View>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);
