import React from 'react';
import { View, Text } from 'react-native';
import Svg, {Polygon} from 'svgs'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
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

class SimpleCollapse extends React.Component {
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
          <Collapse in={checked}>
            <Paper elevation={4} style={classes.paper}>
              <Svg style={classes.svg}>
                <Polygon points="0,100 50,00, 100,100" style={classes.polygon} />
              </Svg>
            </Paper>
          </Collapse>
          <Collapse in={checked} collapsedHeight="40px">
            <Paper elevation={4} style={classes.paper}>
              <Svg style={classes.svg}>
                <Polygon points="0,100 50,00, 100,100" style={classes.polygon} />
              </Svg>
            </Paper>
          </Collapse>
        </View>
      </View>
    );
  }
}

SimpleCollapse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCollapse);
