import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M7 3h2v2H7zM7 11h2v2H7zM7 19h2v2H7zM3 19h2v2H3zM3 3h2v2H3zM3 11h2v2H3zM19 3h2v2h-2zM3 7h2v2H3zM11 3h2v18h-2zM3 15h2v2H3zM15 11h2v2h-2zM19 15h2v2h-2zM19 11h2v2h-2zM19 7h2v2h-2zM19 19h2v2h-2zM15 19h2v2h-2zM15 3h2v2h-2z" /></G></React.Fragment>
, 'BorderVerticalTwoTone');
