import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Defs><Path id="a" d="M0 0h24v24H0V0z" /></Defs><ClipPath id="b"><Use overflow="visible" xlinkHref="#a" /></ClipPath><Path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" clipPath="url(#b)" /></React.Fragment>
, 'DragHandle');
