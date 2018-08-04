import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'ExpandMore');
