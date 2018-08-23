import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'NavigateBefore');
