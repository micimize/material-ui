import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zM8 19h3v4h2v-4h3l-4-4z" /></G></React.Fragment>
, 'VerticalAlignCenterTwoTone');
