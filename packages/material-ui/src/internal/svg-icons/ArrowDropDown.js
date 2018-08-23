import React from 'react';
import { Path } from '@material-ui/core/utils/svgCompatibility';
import { View, Text } from 'react-native';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

/**
 * @ignore - internal component.
 */
let ArrowDropDown = props => (
  <SvgIcon {...props}>
    <Path d="M7 10l5 5 5-5z" />
  </SvgIcon>
);

ArrowDropDown = pure(ArrowDropDown);
ArrowDropDown.muiName = 'SvgIcon';

export default ArrowDropDown;
