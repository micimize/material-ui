import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M7 5h14v2H7z" /><Circle cx="4" cy="6" r="1.5" /><Path d="M7 11h14v2H7zM7 17h14v2H7zM4 19.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z" /><Circle cx="4" cy="12" r="1.5" /></G></React.Fragment>
, 'FormatListBulletedTwoTone');
