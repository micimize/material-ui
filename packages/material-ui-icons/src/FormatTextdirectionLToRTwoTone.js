import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2z" opacity=".3" /><Path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2z" /><Path d="M21 18l-4-4v3H5v2h12v3z" /></G></React.Fragment>
, 'FormatTextdirectionLToRTwoTone');
