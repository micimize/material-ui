import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';

function objectFilterer(filter) {
  return raw =>
    Object.keys(raw)
      .filter(filter)
      .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
      }, {});
}

const normalizedElevation =
  Platform.OS === 'android' ? ['elevation'] : ['shadowOffset', 'shadowRadius'];

function normalize(transitionProps) {
  if (Array.isArray(transitionProps)) {
    return transitionProps.reduce(
      (props, prop) =>
        prop === 'elevation' ? [...props, ...normalizedElevation] : [...props, prop],
      [],
    );
  } else if (transitionProps === 'elevation') {
    return normalizedElevation;
  }
}

const styleExtensions = new Map();
Object.assign(window, { styleExtensions });

function addExtensions(id, { transition }) {
  if (transition) {
    styleExtensions.set(id, {
      transition: { ...transition, transition: normalize(transition.transition) },
    });
  }
}

const extensionsKeys = ['transition'];

const excludeExtensions = objectFilterer(key => !extensionsKeys.includes(key));
const pickExtensions = objectFilterer(key => extensionsKeys.includes(key));

function getExtensions(style) {
  return typeof style === 'number'
    ? styleExtensions.get(style) || {}
    : Array.isArray(style)
      ? style.reduce((ex, s) => Object.assign(ex, getExtensions(s)), {})
      : typeof style === 'object'
        ? pickExtensions(style)
        : {};
}

const Animated = {
  View(props) {
    let transitionProps = getExtensions(props.style).transition;
    return transitionProps ? (
      <Animatable.View {...transitionProps} {...props} />
    ) : (
      <View {...props} />
    );
  },
  Text(props) {
    let transitionProps = getExtensions(props.style).transition;
    return transitionProps ? (
      <Animatable.Text {...transitionProps} {...props} />
    ) : (
      <Text {...props} />
    );
  },
  createComponent(Component) {
    const AnimatableComponent = Animatable.createAnimatableComponent(Component);
    return props => {
      let transitionProps = getExtensions(props.style).transition;
      console.log(transitionProps);
      console.log(StyleSheet.flatten(props.style));
      return transitionProps ? (
        <AnimatableComponent {...transitionProps} {...props} />
      ) : (
        <Component {...props} />
      );
    };
  },
};

export { addExtensions, getExtensions, pickExtensions, excludeExtensions, Animated };
