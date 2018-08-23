import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'CalendarViewDay');
