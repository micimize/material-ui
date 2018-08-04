import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm1 11h-4v-4H8v4H4V9h3V6h10v3h3v9z" /><Path d="M8 8h2v1H8v3h3v-1H9v-1h2V7H8zM15 9h-1V7h-1v3h2v2h1V7h-1z" /></React.Fragment>
, 'LocalConvenienceStoreOutlined');
