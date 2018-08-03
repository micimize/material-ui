/* eslint-disable import/prefer-default-export */

import React from 'react';
import { View, Text } from 'react-native';
import styleNames from 'react-native-style-names';

export function cloneElementWithClassName(child, style) {
  return React.cloneElement(child, {
    style: styleNames(child.props.className, style),
  });
}

export function cloneChildrenWithClassName(children, style) {
  return React.Children.map(children, child => {
    return React.isValidElement(child) && cloneElementWithClassName(child, style);
  });
}

export function isMuiElement(element, muiNames) {
  return React.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

export function isMuiComponent(element, muiNames) {
  return muiNames.indexOf(element.muiName) !== -1;
}
