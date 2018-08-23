import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M11 7h6v2h-6zM11 11h6v2h-6zM11 15h6v2h-6zM7 7h2v2H7zM7 11h2v2H7zM7 15h2v2H7z" /><Path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" /></G></React.Fragment>
, 'ListAltSharp');
