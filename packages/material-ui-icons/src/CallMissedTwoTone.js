import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M5 10.41l7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z" /></G></React.Fragment>
, 'CallMissedTwoTone');
