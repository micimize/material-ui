import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M10 8.64v6.72L15.27 12z" opacity=".3" /><Path d="M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z" /></React.Fragment>
, 'PlayArrowTwoTone');
