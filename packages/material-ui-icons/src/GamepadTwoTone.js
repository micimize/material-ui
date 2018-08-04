import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M6.67 11H4v2h2.67l1-1zM13 6.67V4h-2v2.67l1 1zM11 17.33V20h2v-2.67l-1-1zM16.33 12l1 1H20v-2h-2.67z" opacity=".3" /><Path d="M9 16.5V22h6v-5.5l-3-3-3 3zm4 3.5h-2v-2.67l1-1 1 1V20zM15 7.5V2H9v5.5l3 3 3-3zM11 4h2v2.67l-1 1-1-1V4zM7.5 9H2v6h5.5l3-3-3-3zm-.83 4H4v-2h2.67l1 1-1 1zM16.5 9l-3 3 3 3H22V9h-5.5zm3.5 4h-2.67l-1-1 1-1H20v2z" /></G></React.Fragment>
, 'GamepadTwoTone');
