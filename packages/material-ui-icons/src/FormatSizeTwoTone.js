import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3 12h3v7h3v-7h3V9H3z" /><Path d="M9 7h5v12h3V7h5V4H9z" /></G></React.Fragment>
, 'FormatSizeTwoTone');
