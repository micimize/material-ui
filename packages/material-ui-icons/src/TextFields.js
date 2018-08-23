import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Defs><Path id="a" d="M24 24H0V0h24v24z" /></Defs><ClipPath id="b"><Use overflow="visible" xlinkHref="#a" /></ClipPath><Path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" clipPath="url(#b)" /></React.Fragment>
, 'TextFields');
