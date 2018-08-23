import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M10 17l5-5-5-5v10z" /><Path fill="none" d="M0 24V0h24v24H0z" /></React.Fragment>
, 'ArrowRight');
