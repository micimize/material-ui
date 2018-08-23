import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M11 11h2v2h-2zM11 7h2v2h-2z" /><Path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" /><Path d="M15 11h2v2h-2zM7 11h2v2H7zM11 15h2v2h-2z" /></G></React.Fragment>
, 'BorderOuterTwoTone');
