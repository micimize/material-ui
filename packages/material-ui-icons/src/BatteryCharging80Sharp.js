import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v5h4.93L13 7v2h4V4z" /><Path d="M13 12.5h2L11 20v-5.5H9L11.93 9H7v13h10V9h-4v3.5z" /></G></React.Fragment>
, 'BatteryCharging80Sharp');
