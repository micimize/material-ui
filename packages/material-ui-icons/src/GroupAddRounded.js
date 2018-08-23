import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M7 10H5V8c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zM18 11c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zM13 11c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5s-3 1.34-3 3 1.34 3 3 3zM13 13c-2 0-6 1-6 3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2-4-3-6-3zM19.62 13.16c.83.73 1.38 1.66 1.38 2.84v1.5c0 .17-.02.34-.05.5h2.55c.28 0 .5-.22.5-.5V16c0-1.54-2.37-2.49-4.38-2.84z" /></G></React.Fragment>
, 'GroupAddRounded');
