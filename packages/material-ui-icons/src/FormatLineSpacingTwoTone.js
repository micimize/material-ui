import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M10 5h12v2H10zM10 17h12v2H10zM1.5 17L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zM10 11h12v2H10z" /></G></React.Fragment>
, 'FormatLineSpacingTwoTone');
