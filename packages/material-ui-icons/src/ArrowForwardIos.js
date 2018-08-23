import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'ArrowForwardIos');
