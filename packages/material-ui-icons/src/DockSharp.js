import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M8 23h8v-2H8v2zM18 1.01L6 1v18h12V1.01zM16 15H8V5h8v10z" /></G></React.Fragment>
, 'DockSharp');
