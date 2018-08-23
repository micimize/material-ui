import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M22 2H2v20l4-4h16V2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z" /></G></React.Fragment>
, 'MmsSharp');
