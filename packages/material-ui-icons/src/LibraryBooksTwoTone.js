import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M8 16h12V4H8v12zm2-10h8v2h-8V6zm0 3h8v2h-8V9zm0 3h4v2h-4v-2z" opacity=".3" /><Path d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2z" /><Path d="M6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm14 12H8V4h12v12z" /><Path d="M10 9h8v2h-8zM10 12h4v2h-4zM10 6h8v2h-8z" /></React.Fragment>
, 'LibraryBooksTwoTone');
