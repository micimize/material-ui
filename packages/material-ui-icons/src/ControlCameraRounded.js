import React from 'react';import { Circle, ClipPath, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop } from './utils/svgCompatibility';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><Path d="M4.65 9.35L2.7 11.3c-.39.39-.39 1.02 0 1.41l1.95 1.95c.49.49 1.28.49 1.77 0 .48-.49.48-1.27 0-1.76l-.88-.9.88-.89c.48-.49.48-1.27 0-1.76s-1.28-.49-1.77 0zM17.58 9.35c-.48.49-.48 1.27 0 1.76l.88.89-.88.89c-.48.49-.48 1.27 0 1.76.49.49 1.28.49 1.77 0l1.95-1.95c.39-.39.39-1.02 0-1.41l-1.95-1.95c-.49-.48-1.29-.48-1.77.01zM12 18.46l-.89-.88c-.49-.48-1.27-.48-1.76 0-.49.49-.49 1.28 0 1.77l1.95 1.95c.39.39 1.02.39 1.41 0l1.95-1.95c.49-.49.49-1.28 0-1.77-.49-.48-1.27-.48-1.76 0l-.9.88zM9.35 6.42c.49.48 1.27.48 1.76 0l.89-.88.89.88c.49.48 1.27.48 1.76 0 .49-.49.49-1.28 0-1.77L12.7 2.7a.9959.9959 0 0 0-1.41 0L9.35 4.65c-.49.49-.49 1.29 0 1.77z" /><Circle cx="12" cy="12" r="3" /></React.Fragment>
, 'ControlCameraRounded');
