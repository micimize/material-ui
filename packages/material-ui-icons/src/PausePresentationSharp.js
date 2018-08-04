import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M1 3v18h22V3H1zm20 16H3V5h18v14z" /><Path d="M9 8h2v8H9zM13 8h2v8h-2z" /></G></React.Fragment>
, 'PausePresentationSharp');
