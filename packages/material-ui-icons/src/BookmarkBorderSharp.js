import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 3H5v18l7-3 7 3V3zm-2 15l-5-2.18L7 18V5h10v13z" /></G></React.Fragment>
, 'BookmarkBorderSharp');
