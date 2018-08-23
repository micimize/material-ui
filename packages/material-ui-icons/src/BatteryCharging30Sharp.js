import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17V4z" /><Path d="M11 20v-5.5H7V22h10v-7.5h-3.07L11 20z" /></G></React.Fragment>
, 'BatteryCharging30Sharp');
