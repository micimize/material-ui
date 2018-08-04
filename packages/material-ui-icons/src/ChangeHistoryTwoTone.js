import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M12 7.77L5.61 18h12.78z" opacity=".3" /><Path d="M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z" /></G></React.Fragment>
, 'ChangeHistoryTwoTone');
