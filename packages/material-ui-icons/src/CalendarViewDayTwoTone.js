import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 17h18v2H3zM19 12v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" /><Path d="M5 12h14v1H5z" opacity=".3" /></G></React.Fragment>
, 'CalendarViewDayTwoTone');
