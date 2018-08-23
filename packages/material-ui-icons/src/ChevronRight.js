import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'ChevronRight');
