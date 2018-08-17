/* eslint-disable import/prefer-default-export */

import React from 'react';
import styleNames from '../styles/react-native-style-names';

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

// TODO not sure if this is "correct"
export function getBoundingClientRect(ref) {
  return new Promise(res =>
    ref.measure((x, y, width, height, pageX, pageY) =>
      res({
        left: x,
        right: x + width,
        top: y,
        bottom: y + height,

        x,
        y,
        width,
        height,

        // not technically in spec
        pageX,
        pageY,
      }),
    ),
  );
}

export function layoutToBoundingRect({
  nativeEvent: {
    layout: { x, y, width, height },
  },
}) {
  return {
    left: x,
    right: x + width,
    top: y,
    bottom: y + height,

    x,
    y,
    width,
    height,
  };
}
