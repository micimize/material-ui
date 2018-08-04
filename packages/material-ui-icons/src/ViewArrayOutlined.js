import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M15 7v9h-5V7h5m6-2h-3v13h3V5zm-4 0H8v13h9V5zM7 5H4v13h3V5z" /></G></React.Fragment>
, 'ViewArrayOutlined');
