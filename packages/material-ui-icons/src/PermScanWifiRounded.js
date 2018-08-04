import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M12 3C7.41 3 3.86 4.53.89 6.59c-.49.33-.59 1-.22 1.46l9.78 12.04c.8.98 2.3.99 3.1 0l9.78-12.02c.37-.46.27-1.13-.22-1.46C20.14 4.54 16.59 3 12 3zm0 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm-1-8V6h2v2h-2z" /></React.Fragment>
, 'PermScanWifiRounded');
