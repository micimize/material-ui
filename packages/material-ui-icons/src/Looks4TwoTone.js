import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M.04 0h24v24h-24V0z" /><G><Path d="M5.04 19h14V5h-14v14zm4-12h2v4h2V7h2v10h-2v-4h-4V7z" opacity=".3" /><Path d="M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-14V5h14v14z" /><Path d="M13.04 17h2V7h-2v4h-2V7h-2v6h4z" /></G></React.Fragment>
, 'Looks4TwoTone');
