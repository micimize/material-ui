import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'SkipPrevious');
