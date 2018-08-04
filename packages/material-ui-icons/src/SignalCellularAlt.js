import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0z" /><Path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z" /></React.Fragment>
, 'SignalCellularAlt');
