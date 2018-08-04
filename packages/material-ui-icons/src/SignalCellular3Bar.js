import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fillOpacity=".3" d="M2 22h20V2z" /><Path d="M17 7L2 22h15z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'SignalCellular3Bar');
