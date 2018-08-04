import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Circle cx="12" cy="12" r="10" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'Brightness1');
