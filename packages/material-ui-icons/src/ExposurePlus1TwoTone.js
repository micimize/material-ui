import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M20 18V5h-.3L15 6.7v1.7l3-1.02V18zM10 17v-4h4v-2h-4V7H8v4H4v2h4v4z" /></G></React.Fragment>
, 'ExposurePlus1TwoTone');
