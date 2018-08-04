import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fillOpacity=".3" d="M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z" /><Path d="M3.53 10.94L12 21.5l8.47-10.56c-.43-.33-3.66-2.95-8.47-2.95s-8.04 2.62-8.47 2.95z" /></G></React.Fragment>
, 'NetworkWifiOutlined');
