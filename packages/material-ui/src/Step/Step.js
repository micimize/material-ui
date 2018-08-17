import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import warning from 'warning';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8,
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: 'relative',
  },
  /* Styles applied to the root element if `completed={true}`. */
  completed: {},
};

function Step(props) {
  const {
    active,
    alternativeLabel,
    children,
    classes,
    style: styleProp,
    completed,
    connector,
    disabled,
    index,
    last,
    orientation,
    ...other
  } = props;

  const className = styleNames(
    classes.root,
    classes[orientation],
    {
      [classes.alternativeLabel]: alternativeLabel,
      [classes.completed]: completed,
    },
    styleProp,
  );

  return (
    <View style={className} {...other}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(
          child.type !== React.Fragment,
          [
            "Material-UI: the Step component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n'),
        );

        return React.cloneElement(child, {
          active,
          alternativeLabel,
          completed,
          disabled,
          icon: index + 1,
          last,
          orientation,
          ...child.props,
        });
      })}
      {connector &&
        alternativeLabel &&
        !last &&
        React.cloneElement(connector, { orientation, alternativeLabel })}
    </View>
  );
}

Step.propTypes = {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: PropTypes.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
   */
  children: PropTypes.node,
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
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * @ignore
   * Passed down from Stepper if alternativeLabel is also set.
   */
  connector: PropTypes.element,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   * Used internally for numbering.
   */
  index: PropTypes.number,
  /**
   * @ignore
   */
  last: PropTypes.bool,
  /**
   * @ignore
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

Step.defaultProps = {
  active: false,
  completed: false,
  disabled: false,
};

export default withStyles(styles, { name: 'MuiStep' })(Step);
