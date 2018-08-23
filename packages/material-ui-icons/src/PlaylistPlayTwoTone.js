import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M4 10h12v2H4zM4 6h12v2H4zM4 14h8v2H4zM14 20l5-3-5-3z" /></React.Fragment>
, 'PlaylistPlayTwoTone');
