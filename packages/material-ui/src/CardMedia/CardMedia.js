import React from 'react';
import { Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import warning from 'warning';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%',
  },
};

const MEDIA_COMPONENTS = [Image]; //'video', 'audio', 'picture', 'iframe', 'img'];

function CardMedia(props) {
  const { classes, style, component: Component, image, source, ...other } = props;

  warning(
    Boolean(image || source),
    'Material-UI: either `image` or `source` property must be specified.',
  );

  const isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  return (
    <Component
      style={styleNames(
        classes.root,
        {
          [classes.media]: isMediaComponent,
        },
        style,
      )}
      source={isMediaComponent ? image || source : undefined}
      {...other}
    />
  );
}

CardMedia.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Component for rendering image.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * Image to be displayed as a background image.
   * Either `image` or `source` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  source: PropTypes.string,
};

CardMedia.defaultProps = {
  component: Image,
};

export default withStyles(styles, { name: 'MuiCardMedia' })(CardMedia);
