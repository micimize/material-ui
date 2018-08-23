import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 19h18v2H3zM3 3h18v2H3zM11 7h10v2H11zM3 8v8l4-4zM11 11h10v2H11zM11 15h10v2H11z" /></G></React.Fragment>
, 'FormatIndentIncreaseTwoTone');
