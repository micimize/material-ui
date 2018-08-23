import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 3h18v2H3zM3 11h18v2H3zM3 19h18v2H3zM3 15h18v2H3zM3 7h18v2H3z" /></G></React.Fragment>
, 'FormatAlignJustifyTwoTone');
