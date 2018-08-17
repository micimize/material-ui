import React from 'react';
import pure from 'recompose/pure';
//TODO change back to @material-ui/core
import SvgIcon from '@micimize/material-ui/SvgIcon';

function createSvgIcon(path, displayName) {
  let Icon = props => (
    <SvgIcon {...props}>
      {path}
    </SvgIcon>
  );

  Icon.displayName = displayName;
  Icon = pure(Icon);
  Icon.muiName = 'SvgIcon';

  return Icon;
};

export default createSvgIcon;
