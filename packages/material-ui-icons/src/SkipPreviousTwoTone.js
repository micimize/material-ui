import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M16 14.14V9.86L12.97 12z" opacity=".3" /><Path d="M6 6h2v12H6zM18 18V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z" /></React.Fragment>
, 'SkipPreviousTwoTone');
