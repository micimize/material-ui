import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z" opacity=".3" /><Path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47z" /><Path d="M11 16h2v2h-2zM11 10h2v4h-2z" /></React.Fragment>
, 'WarningTwoTone');
