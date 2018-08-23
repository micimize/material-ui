import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Defs><Path id="a" d="M0 0h24v24H0V0z" /></Defs><Defs><Path id="c" d="M0 0h24v24H0V0z" /></Defs><ClipPath id="b"><Use overflow="visible" xlinkHref="#a" /></ClipPath><ClipPath id="d" clipPath="url(#b)"><Use overflow="visible" xlinkHref="#c" /></ClipPath><Path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" clipPath="url(#d)" /></React.Fragment>
, 'Airplay');
