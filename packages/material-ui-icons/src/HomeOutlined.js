import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M12 5.69l5 4.5V18h-2v-6H9v6H7V10.19l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></G></React.Fragment>
, 'HomeOutlined');
