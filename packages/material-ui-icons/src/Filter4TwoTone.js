import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M21 3H7v14h14V3zm-4 12h-2v-4h-4V5h2v4h2V5h2v10z" opacity=".3" /><Path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2z" /><Path d="M7 19h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM7 3h14v14H7V3z" /><Path d="M15 9h-2V5h-2v6h4v4h2V5h-2z" /></G></React.Fragment>
, 'Filter4TwoTone');
