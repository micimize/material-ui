import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" /><Path fill="none" d="M0 0h24v24H0V0z" /></React.Fragment>
, 'ChangeHistory');
