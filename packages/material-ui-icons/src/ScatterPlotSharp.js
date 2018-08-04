import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Circle cx="7" cy="14" r="3" /><Circle cx="11" cy="6" r="3" /><Circle cx="16.6" cy="17.6" r="3" /></React.Fragment>
, 'ScatterPlotSharp');
