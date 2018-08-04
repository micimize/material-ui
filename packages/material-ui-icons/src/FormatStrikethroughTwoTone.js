import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 12h18v2H3zM14 10V7h5V4H5v3h5v3zM10 16h4v3h-4z" /></G></React.Fragment>
, 'FormatStrikethroughTwoTone');
