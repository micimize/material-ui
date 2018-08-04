import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z" /></G></React.Fragment>
, 'CalendarViewDaySharp');
