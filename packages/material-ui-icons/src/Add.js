import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /><Path fill="none" d="M0 0h24v24H0z" /></React.Fragment>
, 'Add');
