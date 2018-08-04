import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M4 5h3v13H4zM18 5h3v13h-3zM8 18h9V5H8v13zm2-11h5v9h-5V7z" /><Path d="M10 7h5v9h-5z" opacity=".3" /></G></React.Fragment>
, 'ViewArrayTwoTone');
