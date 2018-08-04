import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 5h10v2H3zM7 11H3v2h4v2h2V9H7zM13 15h-2v6h2v-2h8v-2h-8zM3 17h6v2H3zM11 11h10v2H11zM17 3h-2v6h2V7h4V5h-4z" /></G></React.Fragment>
, 'TuneTwoTone');
