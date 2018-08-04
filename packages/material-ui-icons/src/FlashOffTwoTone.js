import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M17 10h-3.61l2.28 2.28zM17 2H7v1.61l6.13 6.13zM3.41 2.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z" /></G></React.Fragment>
, 'FlashOffTwoTone');
