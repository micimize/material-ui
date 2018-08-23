import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M6 21h12V7H6v14zm6-11l4 4h-2v4h-4v-4H8l4-4zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></React.Fragment>
, 'RestoreFromTrashSharp');
