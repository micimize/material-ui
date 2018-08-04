import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M3.84 5.49l7.29 12.96c.38.68 1.36.68 1.74 0l7.29-12.96c.38-.67-.11-1.49-.87-1.49H4.71c-.76 0-1.25.82-.87 1.49zM6.38 6h11.25L12 16 6.38 6z" /></G></React.Fragment>
, 'DetailsRounded');
