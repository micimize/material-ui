import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'ViewArray');
