import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zm-2-1.83V16H5V8h10v.67z" /><Path d="M7.11 11.11L11 15l3.77-3.79-.78-.79L11 13.43l-3.11-3.1h2.55V9.22H6v4.44h1.11z" /></React.Fragment>
, 'MissedVideoCallOutlined');
