import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M4 6H2v16h16v-2H4V6z" /><Path d="M22 2H6v16h16V2zm-2 10l-2.5-1.5L15 12V4h5v8z" /></G></React.Fragment>
, 'CollectionsBookmarkSharp');
