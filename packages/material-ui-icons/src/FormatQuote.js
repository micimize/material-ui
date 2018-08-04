import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'FormatQuote');
