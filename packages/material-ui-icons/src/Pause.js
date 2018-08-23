import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'Pause');
