import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M7 9v6h4l5 5V4l-5 5H7z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'VolumeMute');
