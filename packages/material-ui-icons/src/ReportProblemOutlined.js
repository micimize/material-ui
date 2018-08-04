import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z" /><Path d="M13 16h-2v2h2v-2zM13 10h-2v4h2v-4z" /></React.Fragment>
, 'ReportProblemOutlined');
