import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M12 2l-5.5 9h11z" /><Circle cx="17.5" cy="17.5" r="4.5" /><Path d="M3 13.5h8v8H3z" /></React.Fragment>
, 'CategorySharp');
