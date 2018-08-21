import React from 'react';
import { StyleSheet } from 'react-native';
import { get as getExtensions } from './extensions';
import Svgs from 'svgs';

function withSvgStyle(Component) {
  return ({ style, ...props }) => {
    let svgProps = getExtensions(style).svg || {}
    return <Component {...svgProps} {...props} style={StyleSheet.flatten(style)} />
  }
}

export const Svg = withSvgStyle(Svgs)

export default withSvgStyle;
