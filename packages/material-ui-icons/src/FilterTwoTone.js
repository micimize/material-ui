import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M7 17h14V3H7v14zm4.25-5.53l1.96 2.36 2.75-3.54L19.5 15h-11l2.75-3.53z" opacity=".3" /><Path d="M1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16z" /><Path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" /><Path d="M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11z" /></G></React.Fragment>
, 'FilterTwoTone');
