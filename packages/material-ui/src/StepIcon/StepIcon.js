import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import CheckCircle from '../internal/svg-icons/CheckCircle';
import Warning from '../internal/svg-icons/Warning';
import withStyles from '../styles/withStyles';
import SvgIcon from '../SvgIcon';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    // display: 'block',
    color: theme.palette.text.disabled,
    '[active="true"]': {
      color: theme.palette.primary.main,
    },
    '[completed="true"]': {
      color: theme.palette.primary.main,
    },
    '[error="true"]': {
      color: theme.palette.error.main,
    },
  },
  /* Styles applied to the SVG text element. */
  text: {
    fill: theme.palette.primary.contrastText,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.fontFamily,
  },
  /* Styles applied to the root element if `active={true}`. */
  active: {},
  /* Styles applied to the root element if `completed={true}`. */
  completed: {},
  /* Styles applied to the root element if `error={true}`. */
  error: {},
});

function StepIcon(props) {
  const { completed, icon, active, error, classes } = props;

  if (typeof icon === 'number' || typeof icon === 'string') {
    if (error) {
      return <Warning style={styleNames(classes.root, classes.error)} />;
    }
    if (completed) {
      return <CheckCircle style={styleNames(classes.root, classes.completed)} />;
    }
    return (
      <SvgIcon
        style={styleNames(classes.root, {
          [classes.active]: active,
        })}
      >
        <circle cx="12" cy="12" r="12" />
        <text style={classes.text} x="12" y="16" textAnchor="middle">
          {icon}
        </text>
      </SvgIcon>
    );
  }

  return icon;
}

StepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * Mark the step as failed.
   */
  error: PropTypes.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: PropTypes.node.isRequired,
};

StepIcon.defaultProps = {
  active: false,
  completed: false,
  error: false,
};

export default withStyles(styles, { name: 'MuiStepIcon' })(StepIcon);
