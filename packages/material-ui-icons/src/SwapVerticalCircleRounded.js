import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9l3.15-3.15c.2-.2.51-.2.71 0L13.5 9H11v4H9V9H6.5zm7.85 9.15c-.2.2-.51.2-.71 0L10.5 15H13v-4h2v4h2.5l-3.15 3.15z" /></G></React.Fragment>
, 'SwapVerticalCircleRounded');
