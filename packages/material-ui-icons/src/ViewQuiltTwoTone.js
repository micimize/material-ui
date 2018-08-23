import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><G opacity=".3"><Path d="M16 12.5h3V16h-3zM6 7h3v9H6zM11 12.5h3V16h-3zM11 7h8v3.5h-8z" /></G><Path d="M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3v-3.5h3V16zm5 0h-3v-3.5h3V16zm0-5.5h-8V7h8v3.5z" /></G></React.Fragment>
, 'ViewQuiltTwoTone');
