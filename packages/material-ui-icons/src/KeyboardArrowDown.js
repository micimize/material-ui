import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /><Path fill="none" d="M0 0h24v24H0V0z" /></React.Fragment>
, 'KeyboardArrowDown');
