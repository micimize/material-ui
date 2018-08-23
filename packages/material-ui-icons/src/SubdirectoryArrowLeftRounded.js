import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M5.71 15.71l4.58 4.58c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42L8.83 16H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v9H8.83l2.88-2.87c.39-.39.39-1.03 0-1.42-.39-.39-1.03-.39-1.42 0l-4.58 4.58c-.39.39-.39 1.03 0 1.42z" /></React.Fragment>
, 'SubdirectoryArrowLeftRounded');
