import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M14 7l-5 5 5 5V7z" /><Path fill="none" d="M24 0v24H0V0h24z" /></React.Fragment>
, 'ArrowLeft');
