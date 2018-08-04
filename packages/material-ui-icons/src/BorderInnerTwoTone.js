import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 15h2v2H3zM3 3h2v2H3zM3 19h2v2H3z" /><Path d="M11 21h2v-8h8v-2h-8V3h-2v8H3v2h8z" /><Path d="M7 19h2v2H7zM19 15h2v2h-2zM15 19h2v2h-2zM19 19h2v2h-2zM3 7h2v2H3zM19 7h2v2h-2zM7 3h2v2H7zM15 3h2v2h-2zM19 3h2v2h-2z" /></G></React.Fragment>
, 'BorderInnerTwoTone');
