import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M5 13H3.2L5 10.9V10H2v1h1.8L2 13.1v.9h3zM7 5h14v2H7zM5 16H2v1h2v.5H3v1h1v.5H2v1h3zM7 17h14v2H7zM3 8h1V4H2v1h1zM7 11h14v2H7z" /></G></React.Fragment>
, 'FormatListNumberedTwoTone');
