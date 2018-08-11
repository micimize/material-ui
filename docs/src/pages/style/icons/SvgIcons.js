import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Path, Defs, Stop } from 'svgs';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    flexDirection: 'row',
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

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function SvgIcons(props) {
  const { classes } = props;
  return (
    <View style={classes.root}>
      <HomeIcon style={classes.icon} />
      <HomeIcon style={classes.icon} color="primary" />
      <HomeIcon style={classes.icon} color="secondary" />
      <HomeIcon style={classes.icon} color="action" />
      <HomeIcon style={classes.iconHover} color="error" style={{ fontSize: 30 }} />
      <HomeIcon color="disabled" style={classes.icon} style={{ fontSize: 36 }} />
      <HomeIcon
        style={classes.icon}
        color="primary"
        style={{ fontSize: 36 }}
        component={svgProps => (
          <Svg {...svgProps}>
            <Defs>
              <linearGradient id="gradient1">
                <Stop offset="30%" stopColor={blue[400]} />
                <Stop offset="70%" stopColor={red[400]} />
              </linearGradient>
            </Defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </Svg>
        )}
      />
    </View>
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);
