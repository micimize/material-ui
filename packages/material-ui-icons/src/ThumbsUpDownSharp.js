import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M12 5H5.82l.78-3.78L5.38 0 0 5.38V14h9.24L12 7.54zM14.76 10L12 16.46V19h6.18l-.78 3.78L18.62 24 24 18.62V10z" /></G></React.Fragment>
, 'ThumbsUpDownSharp');
