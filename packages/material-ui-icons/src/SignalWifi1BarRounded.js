import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M6.67 14.86l3.77 4.7c.8 1 2.32 1 3.12 0l3.78-4.7C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z" /><Path fillOpacity=".3" d="M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z" /></G></React.Fragment>
, 'SignalWifi1BarRounded');
