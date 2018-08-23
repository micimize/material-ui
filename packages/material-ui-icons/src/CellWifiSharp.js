import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fillOpacity=".3" d="M6 22h16V5.97L6 22z" /><Path d="M18 9.98L6 22h12V9.98zM3.93 5.93l1.29 1.29c3.19-3.19 8.38-3.19 11.57 0l1.29-1.29c-3.91-3.91-10.25-3.91-14.15 0zm5.14 5.14L11 13l1.93-1.93c-1.07-1.06-2.79-1.06-3.86 0zM6.5 8.5l1.29 1.29c1.77-1.77 4.65-1.77 6.43 0L15.5 8.5c-2.48-2.48-6.52-2.48-9 0z" /></G></React.Fragment>
, 'CellWifiSharp');
