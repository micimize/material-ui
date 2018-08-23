import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Circle cx="12" cy="19" r="2" /><Path d="M10 3h4v12h-4z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'PriorityHigh');
