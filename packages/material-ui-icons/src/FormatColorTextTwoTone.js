import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fillOpacity=".36" d="M0 20h24v4H0z" /><Path d="M5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2L5.5 17zm8.88-5H9.62L12 5.67 14.38 12z" /></G></React.Fragment>
, 'FormatColorTextTwoTone');
