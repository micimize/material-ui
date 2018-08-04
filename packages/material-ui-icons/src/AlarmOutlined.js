import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from 'svgs';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zM17.3365 1.811l4.6074 3.8436-1.2812 1.5358-4.6074-3.8436zM6.6633 1.8104l1.2812 1.5358-4.6074 3.8436L2.056 5.654z" /><Path d="M12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" /></G></React.Fragment>
, 'AlarmOutlined');
