import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M12.5 12h3v7h3v-7h3V9h-9z" /><Path d="M15.5 4h-13v3h5v12h3V7h5z" /></React.Fragment>
, 'TextFieldsTwoTone');
