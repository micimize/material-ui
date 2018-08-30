import React from 'react';
import { get as getExtensions } from './extensions';
import { View as RNView, Text as RNText } from 'react-native';
import { createAnimatableComponent } from '@micimize/react-native-animatable';
import registerCustomAnimations from './customAnimations';

registerCustomAnimations();

function createComponent(Component) {
  const AnimatableComponent = createAnimatableComponent(Component);
  return props => {
    const transitionProps = getExtensions(props.style).transition;
    return transitionProps ? (
      <AnimatableComponent {...transitionProps} {...props} style={props.style} />
    ) : (
      <Component {...props} />
    );
  };
}

const View = createComponent(RNView);
const Text = createComponent(RNText);

export { View, Text, createComponent };

/*

function createComponent(Component) {
  const AnimatableComponent = createAnimatableComponent(Component);
  const name = getDisplayName(AnimatableComponent);
  return setDisplayName(`withTransitions(${name})`)(props => {
    const transitionProps = getExtensions(props.style).transition;
    return transitionProps ? (
      <AnimatableComponent {...transitionProps} {...props} style={props.style} />
    ) : (
      <Component {...props} />
    );
  });
}
*/
