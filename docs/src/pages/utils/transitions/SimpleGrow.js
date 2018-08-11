import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Polygon } from 'svgs';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    flexDirection: 'row',
  },
  paper: {
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class SimpleGrow extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <View style={classes.root}>
        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
        <View style={classes.container}>
          <Grow in={checked}>
            <Paper elevation={4} style={classes.paper}>
              <Svg style={classes.svg}>
                <Polygon points="0,100 50,00, 100,100" style={classes.polygon} />
              </Svg>
            </Paper>
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} style={classes.paper}>
              <Svg style={classes.svg}>
                <Polygon points="0,100 50,00, 100,100" style={classes.polygon} />
              </Svg>
            </Paper>
          </Grow>
        </View>
      </View>
    );
  }
}

SimpleGrow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);
