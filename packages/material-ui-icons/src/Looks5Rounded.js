import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 6h-3v2h2c1.1 0 2 .9 2 2v2c0 1.11-.9 2-2 2h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-2h-3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1z" /></G></React.Fragment>
, 'Looks5Rounded');
