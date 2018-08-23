import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><G opacity=".3"><Path d="M11 12.5h3V16h-3zM11 7h3v3.5h-3zM6 12.5h3V16H6zM6 7h3v3.5H6zM16 7h3v3.5h-3zM16 12.5h3V16h-3z" /></G><Path d="M4 5v13h17V5H4zm5 11H6v-3.5h3V16zm0-5.5H6V7h3v3.5zm5 5.5h-3v-3.5h3V16zm0-5.5h-3V7h3v3.5zm5 5.5h-3v-3.5h3V16zm0-5.5h-3V7h3v3.5z" /></G></React.Fragment>
, 'ViewModuleTwoTone');
