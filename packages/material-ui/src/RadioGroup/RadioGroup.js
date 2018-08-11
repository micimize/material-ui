// @inheritedComponent FormGroup

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import warning from 'warning';
import FormGroup from '../FormGroup';
import { createChainedFunction, find } from '../utils/helpers';

class RadioGroup extends React.Component {
  radios = [];

  focus = () => {
    if (!this.radios || !this.radios.length) {
      return;
    }

    const focusRadios = this.radios.filter(n => !n.disabled);

    if (!focusRadios.length) {
      return;
    }

    const selectedRadio = find(focusRadios, n => n.checked);

    if (selectedRadio) {
      selectedRadio.focus();
      return;
    }

    focusRadios[0].focus();
  };

  render() {
    const { children, value, onValueChange: _, ...other } = this.props;

    this.radios = [];

    return (
      <FormGroup role="radiogroup" {...other}>
        {React.Children.map(children, child => child)
          .filter(React.isValidElement)
          .map((child, index) => {
            warning(
              child.type !== React.Fragment,
              [
                "Material-UI: the RadioGroup component doesn't accept a Fragment as a child.",
                'Consider providing an array instead.',
              ].join('\n'),
            );

            const onValueChange = value => {
              if (child.props.onValueChange) {
                child.props.onValueChange(child.props.value, index);
              }
              if (this.props.onValueChange) {
                this.props.onValueChange(value && child.props.value, index);
              }
            };

            return React.cloneElement(child, {
              inputRef: node => {
                if (node) {
                  this.radios.push(node);
                }
              },
              value: value === child.props.value,
              onValueChange,
            });
          })}
      </FormGroup>
    );
  }
}

RadioGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The name used to reference the value of the control.
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {any} itemValue: the value prop of the item that was selected
   * @param {number} itemPosition: the index of the selected item in this picker
   */
  onValueChange: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * Value of the selected radio button.
   */
  value: PropTypes.string,
};

export default RadioGroup;
