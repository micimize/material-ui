import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'GetApp');
