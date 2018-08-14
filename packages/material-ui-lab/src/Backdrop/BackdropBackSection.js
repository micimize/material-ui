import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '@material-ui/core/styles/withStyles';
import Fade from '@material-ui/core/Fade';
import AnimatedHeight from './animated-height';

const FADE_OUT = 150;
const EXPAND = 150;
const FADE_IN = 150;

export const styles = {
  root: {
    width: '100%',
    paddingLeft: 7.5,
    paddingRight: 7.5,
    //opacity: 0,
    zIndex: 0,
  },
  expanded: {
    zIndex: 1,
    //opacity: 0,
  },
};

function BackdropBackSection(props) {
  const { children, classes, style: styleProp, expanded, ...other } = props;

  const style = styleNames(classes.root, styleProp, { [classes.expanded]: expanded });

  const animationProps = {
    delay: FADE_OUT,
    duration: EXPAND,
    height: expanded ? 'auto' : 0,
  };

  const fadeProps = {
    in: expanded,
    timeout: expanded ? FADE_IN : FADE_OUT,
    style: {
      delay: expanded ? EXPAND + FADE_OUT : 0,
    },
  };

  return (
    <AnimatedHeight {...animationProps} {...other}>
      {/*<Fade {...fadeProps}>*/}
      <View style={style}>{children}</View>
      {/* </Fade> */}
    </AnimatedHeight>
  );
}

BackdropBackSection.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  style: PropTypes.string,
  /**
   * If `true`, expand to reveal section.
   */
  expanded: PropTypes.bool,
};

BackdropBackSection.defaultProps = {
  expanded: false,
};

export default withStyles(styles, { name: 'MuiBackdropBackSection' })(BackdropBackSection);
