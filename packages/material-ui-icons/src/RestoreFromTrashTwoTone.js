import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M16 14h-2v4h-4v-4H8v5h8zM16 14V9H8v5l4-4z" opacity=".3" /><Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2-5V9h8v10H8v-5zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /><Path d="M10 18h4v-4h2l-4-4-4 4h2z" /></React.Fragment>
, 'RestoreFromTrashTwoTone');
