import React from 'react';
import { StyleSheet } from 'react-native';
import { get as getExtensions } from './extensions';
import Svgs, { G } from '@material-ui/core/utils/svgCompatibility';

function withSvgStyle(Component) {
  return ({ style, children, ...props }) => {
    let svgProps = getExtensions(style).svg || {}
    return (
      <Component {...svgProps} {...props} style={StyleSheet.flatten(style)}>
        {children}
      </Component>
    )
  }
}

// Need to wrap children in G with the same styles for things to work
export function Svg({ style, children, ...props }) {
  let svgProps = getExtensions(style).svg || {}
  return (
    <Svgs {...svgProps} {...props} style={style}>
      <G {...svgProps}>{children}</G>
    </Svgs>
  )
}

export default withSvgStyle;
