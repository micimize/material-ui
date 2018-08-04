import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 19.01h18V4.99H3v14.02zM14 15h3v-3h2v5h-5v-2zM5 7h5v2H7v3H5V7z" opacity=".3" /><Path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" /><Path d="M7 9h3V7H5v5h2zM19 12h-2v3h-3v2h5z" /></G></React.Fragment>
, 'AspectRatioTwoTone');
