import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'ExpandLess');
