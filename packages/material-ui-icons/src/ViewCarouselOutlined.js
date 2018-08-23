import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M2 6h4v11H2zM7 19h10V4H7v15zM9 6h6v11H9V6zM18 6h4v11h-4z" /></G></React.Fragment>
, 'ViewCarouselOutlined');
