// @inheritedComponent Paper

import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import { isMuiElement } from '../utils/reactHelpers';
import { capitalize } from '../utils/helpers';
import Paper from '../Paper';

export const styles = theme => {
  return {
    root: {
      position: 'absolute',
      zIndex: 0,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
    },
  };
};

class Backdrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backHeight: props.initialHeight || 0,
    };
  }

  onLayoutBack = event => this.setState({ backHeight: event.nativeEvent.layout.height });

  translateFront = () => ({ transform: [{ translateY: this.state.backHeight }] });

  render() {
    const { children: childrenProp, classes, style: styleProp, color, ...other } = this.props;

    const style = styleNames(
      classes.root,
      {
        [classes[`color${capitalize(color)}`]]: color !== 'default',
      },
      styleProp,
    );

    const children = React.Children.map(
      childrenProp,
      child =>
        isMuiElement(child, ['BackdropBack'])
          ? React.cloneElement(child, { onLayout: this.onLayoutBack })
          : isMuiElement(child, ['BackdropFront'])
            ? React.cloneElement(child, { style: [child.props.style, this.translateFront()] })
            : child,
    );

    return (
      <Paper square elevation={0} style={style} {...other}>
        {children}
      </Paper>
    );
  }
}

Backdrop.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Initial height before onLayout is called
   */
  initialHeight: PropTypes.number,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
};

Backdrop.defaultProps = {
  color: 'primary',
  initialHeight: 56,
};

export default withStyles(styles, { name: 'MuiBackdrop' })(Backdrop);
