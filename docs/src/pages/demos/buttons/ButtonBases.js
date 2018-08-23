import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100%', // Overrides inline-style
      height: 100,
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: require('../static/images/grid-list/breakfast.jpg'),
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: require('../static/images/grid-list/burgers.jpg'),
    title: 'Burgers',
    width: '30%',
  },
  {
    url: require('../static/images/grid-list/camera.jpg'),
    title: 'Camera',
    width: '30%',
  },
];

function ButtonBases(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          style={classes.image}
          style={{
            width: image.width,
          }}
        >
          <Image
            style={classes.imageSrc}
            source={image.url}
          />
          <Text style={classes.imageButton}>
            <Typography
              variant="subheading"
              style={classes.imageTitle}
            >
              {image.title}
              <Text style={classes.imageMarked} />
            </Typography>
          </Text>
        </ButtonBase>
      ))}
    </View>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);
