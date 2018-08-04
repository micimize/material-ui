import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 24V0h24v24H0z" /><Path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" /></React.Fragment>
, 'Eject');
