import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M7 17v5h10v-5H7z" /><Path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v13h10V4z" /></G></React.Fragment>
, 'Battery20Sharp');
