import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 2h6v6h-3l1-4-4 1V5zM5 5h6v3L7 7l1 4H5V5zm6 14H5v-6h3l-1 4 4-1v3zm8 0h-6v-3l4 1-1-4h3v6zm-4.37-4.37L12 13.72l-2.63.91.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63z" /></G></React.Fragment>
, 'PagesOutlined');
