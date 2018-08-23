import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M7 17h14V3H7v14zm4-6c0-1.11.9-2 2-2h2V7h-4V5h4c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2v2h4v2h-6v-4z" opacity=".3" /><Path d="M17 13h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z" /><Path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" /><Path d="M1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16z" /></G></React.Fragment>
, 'Filter2TwoTone');
