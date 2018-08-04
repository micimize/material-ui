import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M8 8h8v8H8z" opacity=".3" /><Path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" /></React.Fragment>
, 'StopTwoTone');
