import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fillOpacity=".3" d="M2 22h20V2z" /><Path d="M12 12L2 22h10z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'SignalCellular1Bar');
