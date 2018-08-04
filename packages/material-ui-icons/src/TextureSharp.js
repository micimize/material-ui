import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19.66 3L3.07 19.59V21h1.41L21.07 4.42V3zM11.95 3l-8.88 8.88v2.83L14.78 3zM3.07 3v4l4-4zM21.07 21v-4l-4 4zM12.19 21l8.88-8.88V9.29L9.36 21z" /></G></React.Fragment>
, 'TextureSharp');
