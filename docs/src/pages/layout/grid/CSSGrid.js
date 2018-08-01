import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});

function CSSGrid(props) {
  const { classes } = props;

  return (
    <View>
      <Typography variant="subheading" gutterBottom>
        Material-UI Grid:
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="subheading" gutterBottom>
        CSS Grid Layout:
      </Typography>
      <View className={classes.container}>
        <View style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </View>
        <View style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </View>
        <View style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </View>
        <View style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </View>
        <View style={{ gridColumnEnd: 'span 8' }}>
          <Paper className={classes.paper}>xs=8</Paper>
        </View>
        <View style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </View>
      </View>
    </View>
  );
}

CSSGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CSSGrid);
