import React from 'react';
import { Path } from '../../utils/svgCompatibility';
import { View, Text } from 'react-native';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

/**
 * @ignore - internal component.
 */
let KeyboardArrowLeft = props => (
  <SvgIcon {...props}>
    <Path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
  </SvgIcon>
);
KeyboardArrowLeft = pure(KeyboardArrowLeft);
KeyboardArrowLeft.muiName = 'SvgIcon';

export default KeyboardArrowLeft;
