import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 19h2v2h-2zM19 11h2v2h-2zM19 15h2v2h-2zM15 19h2v2h-2zM3 21h2V5h16V3H3z" /><Path d="M19 7h2v2h-2zM11 19h2v2h-2zM7 19h2v2H7z" /></G></React.Fragment>
, 'BorderStyleTwoTone');
