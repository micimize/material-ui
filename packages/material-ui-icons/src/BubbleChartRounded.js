import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Circle cx="7.2" cy="14.4" r="3.2" /><Circle cx="14.8" cy="18" r="2" /><Circle cx="15.2" cy="8.8" r="4.8" /></G></React.Fragment>
, 'BubbleChartRounded');
