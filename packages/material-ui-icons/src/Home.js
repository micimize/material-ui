import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'Home');
