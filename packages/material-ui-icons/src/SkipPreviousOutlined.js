import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M6 6h2v12H6zM9.5 12l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z" /></React.Fragment>
, 'SkipPreviousOutlined');
