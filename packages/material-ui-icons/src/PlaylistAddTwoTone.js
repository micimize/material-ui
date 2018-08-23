import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M2 14h8v2H2zM2 10h12v2H2zM2 6h12v2H2z" /><Path d="M18 10h-2v4h-4v2h4v4h2v-4h4v-2h-4z" /></React.Fragment>
, 'PlaylistAddTwoTone');
