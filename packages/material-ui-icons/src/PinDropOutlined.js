import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M5 20h14v2H5zM18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zM8 8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.13-2.08 5.46-4 7.91-1.92-2.44-4-5.78-4-7.91z" /><Path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2c1.11 0 2-.9 2-2s-.9-2-2-2z" /></React.Fragment>
, 'PinDropOutlined');
