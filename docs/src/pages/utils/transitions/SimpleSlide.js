import React from 'react';
import { View, Text } from 'react-native';
import Svg, {Polygon} from 'svgs'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing.unit * 2,
  },
  paper: {
    zIndex: 1,
    position: 'relative',
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

class SimpleSlide extends React.Component {
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
        <View style={classes.wrapper}>
          <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} style={classes.paper}>
              <Svg style={classes.svg}>
                <Polygon points="0,100 50,00, 100,100" style={classes.polygon} />
              </Svg>
            </Paper>
          </Slide>
        </View>
      </View>
    );
  }
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlide);
