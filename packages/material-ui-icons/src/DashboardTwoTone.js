import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><G opacity=".3"><Path d="M5 5h4v6H5zM15 13h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" /></G><Path d="M3 13h8V3H3v10zm2-8h4v6H5V5zM13 21h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></G></React.Fragment>
, 'DashboardTwoTone');
