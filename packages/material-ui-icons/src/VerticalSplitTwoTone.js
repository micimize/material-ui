import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M15 7h4v10h-4z" opacity=".3" /><Path d="M3 13h8v2H3zM3 17h8v2H3zM3 9h8v2H3zM3 5h8v2H3zM13 5v14h8V5h-8zm6 12h-4V7h4v10z" /></G></React.Fragment>
, 'VerticalSplitTwoTone');
