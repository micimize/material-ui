import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M14 16h5V8h-5v8zm2-6h1v4h-1v-4zM8 16h5V8H8v8zm2-6h1v4h-1v-4zM5 8h2v8H5z" /><Path d="M2 4v16h20V4H2zm18 14H4V6h16v12z" /></React.Fragment>
, 'MoneySharp');
