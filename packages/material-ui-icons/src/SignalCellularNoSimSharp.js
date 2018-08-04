import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 3h-9L7.95 5.06 19 16.11zM3.79 3.74L2.38 5.15 5 7.77V21h13.23l1.62 1.62 1.41-1.41z" /></G></React.Fragment>
, 'SignalCellularNoSimSharp');
