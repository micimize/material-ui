import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><G opacity=".3"><Path d="M6 13h13v3H6zM6 8h13v3H6z" /></G><Path d="M4 6v12h17V6H4zm15 10H6v-3h13v3zm0-5H6V8h13v3z" /></G></React.Fragment>
, 'ViewStreamTwoTone');
