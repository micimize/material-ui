import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M12 6.5c-3.79 0-7.17 2.13-8.82 5.5 1.65 3.37 5.02 5.5 8.82 5.5s7.17-2.13 8.82-5.5C19.17 8.63 15.79 6.5 12 6.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" opacity=".3" /><Path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.63 8.21 6.5 12 6.5s7.17 2.13 8.82 5.5c-1.65 3.37-5.03 5.5-8.82 5.5z" /><Path d="M12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></G></React.Fragment>
, 'RemoveRedEyeTwoTone');
