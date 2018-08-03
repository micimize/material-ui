import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  root: {
    width: 400,
    height: 400,
    padding: 60,
  },
};

// Used /docs/src/pages/demos/tooltips/PositionedTooltips.js as inspiration.
function PositionedTooltips(props) {
  const { classes } = props;
  return (
    <View style={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Tooltip open title="Add" placement="top-start">
            <Button style={classes.fab}>top-start</Button>
          </Tooltip>
          <Tooltip open title="Add" placement="top">
            <Button style={classes.fab}>top</Button>
          </Tooltip>
          <Tooltip open title="Add" placement="top-end">
            <Button style={classes.fab}>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Tooltip open title="Add" placement="left-start">
            <Button style={classes.fab}>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip open title="Add" placement="left">
            <Button style={classes.fab}>left</Button>
          </Tooltip>
          <br />
          <Tooltip open title="Add" placement="left-end">
            <Button style={classes.fab}>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column" spacing={0}>
          <Grid item>
            <Tooltip open title="Add" placement="right-start">
              <Button style={classes.fab}>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip open title="Add" placement="right">
              <Button style={classes.fab}>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip open title="Add" placement="right-end">
              <Button style={classes.fab}>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Tooltip open title="Add" placement="bottom-start">
            <Button style={classes.fab}>bottom-start</Button>
          </Tooltip>
          <Tooltip open title="Add" placement="bottom">
            <Button style={classes.fab}>bottom</Button>
          </Tooltip>
          <Tooltip open title="Add" placement="bottom-end">
            <Button style={classes.fab}>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </View>
  );
}

PositionedTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedTooltips);
