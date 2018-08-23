import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M7 17h14V3H7v14zm4-10V5h6v2l-4 8h-2l4-8h-4z" opacity=".3" /><Path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2z" /><Path d="M13 15l4-8V5h-6v2h4l-4 8z" /><Path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" /></G></React.Fragment>
, 'Filter7TwoTone');
