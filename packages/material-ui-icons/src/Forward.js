import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M12 8V4l8 8-8 8v-4H4V8z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'Forward');
