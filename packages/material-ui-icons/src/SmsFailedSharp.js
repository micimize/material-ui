import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M22 2H2v20l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z" /></G></React.Fragment>
, 'SmsFailedSharp');
