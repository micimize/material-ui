import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fillOpacity=".3" d="M22 8V2L2 22h16V8h4z" /><Path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" /></G></React.Fragment>
, 'SignalCellularConnectedNoInternet0BarTwoTone');
