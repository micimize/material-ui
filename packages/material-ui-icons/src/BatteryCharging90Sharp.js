import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4V4z" /><Path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4v4.5z" /></G></React.Fragment>
, 'BatteryCharging90Sharp');
