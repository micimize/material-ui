import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M3 19.01h18V4.99H3v14.02zM18 10l2.5 2.01L18 14v-4zm-5.99-4.5L14 8h-4l2.01-2.5zM14 16l-1.99 2.5L10 16h4zm-8-6v4l-2.5-1.99L6 10z" opacity=".3" /><Path d="M14 16h-4l2.01 2.5zM18 10v4l2.5-1.99z" /><Path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" /><Path d="M6 10l-2.5 2.01L6 14zM12.01 5.5L10 8h4z" /></React.Fragment>
, 'SettingsOverscanTwoTone');
