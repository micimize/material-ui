import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Defs><Path id="a" d="M24 24H0V0h24v24z" /></Defs><ClipPath id="b"><Use overflow="visible" xlinkHref="#a" /></ClipPath><Path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" clipPath="url(#b)" /></React.Fragment>
, 'CallMissedOutgoing');
