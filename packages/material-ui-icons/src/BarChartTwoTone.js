import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M5 9.2h3V19H5zM16.2 13H19v6h-2.8zM10.6 5h2.8v14h-2.8z" /></G></React.Fragment>
, 'BarChartTwoTone');
