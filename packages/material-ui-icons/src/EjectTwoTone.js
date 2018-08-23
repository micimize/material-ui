import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M12 8.6L9.07 13h5.86z" opacity=".3" /><Path d="M5 17h14v2H5zM12 5L5.33 15h13.34L12 5zm0 3.6l2.93 4.4H9.07L12 8.6z" /></G></React.Fragment>
, 'EjectTwoTone');
