import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M6.5 10h-2v7h2v-7zM12.5 10h-2v7h2v-7zM21 19H2v2h19v-2zM18.5 10h-2v7h2v-7zM11.5 3.26L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z" /></G></React.Fragment>
, 'AccountBalanceOutlined');
