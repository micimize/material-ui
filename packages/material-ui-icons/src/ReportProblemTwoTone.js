import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z" opacity=".3" /><Path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z" /><Path d="M11 16h2v2h-2zM11 10h2v4h-2z" /></React.Fragment>
, 'ReportProblemTwoTone');
