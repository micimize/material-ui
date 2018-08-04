import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M4 20h16v-8H4v8zm6-7.27L16 16l-6 3.26v-6.53z" opacity=".3" /><Path d="M4 6h16v2H4zM6 2h12v2H6zM20 10H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8z" /><Path d="M10 12.73v6.53L16 16z" /></React.Fragment>
, 'SubscriptionsTwoTone');
