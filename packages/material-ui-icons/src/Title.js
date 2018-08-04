import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M5 4v3h5.5v12h3V7H19V4z" /><Path fill="none" d="M0 0h24v24H0V0z" /></React.Fragment>
, 'Title');
