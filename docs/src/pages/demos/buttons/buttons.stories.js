import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { View, Text, TextInput } from 'react-native';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { darken } from '@material-ui/core/styles/colorManipulator';

import AppWrapper from './AppWrapper';

import TextButtons from './TextButtons';
import OutlinedButtons from './OutlinedButtons';
import ContainedButtons from './ContainedButtons';
import FloatingActionButtons from './FloatingActionButtons';
import FloatingActionButtonZoom from './FloatingActionButtonZoom';
import ButtonSizes from './ButtonSizes';
import IconButtons from './IconButtons';
import IconLabelButtons from './IconLabelButtons';
import CustomizedButtons from './CustomizedButtons';
import ButtonBases from './ButtonBases';

let uiTheme = {
  paletteType: 'light',
  paletteColors: {
    primary: blue,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(pink.A400, 0.08),
    },
  },
  direction: 'ltr',
};

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('TextButtons', () => (
    <AppWrapper uiTheme={uiTheme}>
      <TextButtons />
    </AppWrapper>
  ))
  .add('OutlinedButtons', () => (
    <AppWrapper uiTheme={uiTheme}>
      <OutlinedButtons />
    </AppWrapper>
  ))
  .add('ContainedButtons', () => (
    <AppWrapper uiTheme={uiTheme}>
      <ContainedButtons />
    </AppWrapper>
  ))
  .add('FloatingActionButtons', () => (
    <AppWrapper uiTheme={uiTheme}>
      <FloatingActionButtons />
    </AppWrapper>
  ))
  .add('FloatingActionButtonZoom', () => (
    <AppWrapper uiTheme={uiTheme}>
      <FloatingActionButtonZoom />
    </AppWrapper>
  ))
  .add('ButtonSizes', () => (
    <AppWrapper uiTheme={uiTheme}>
      <ButtonSizes />
    </AppWrapper>
  ))
  .add('IconButtons', () => (
    <AppWrapper uiTheme={uiTheme}>
      <IconButtons />
    </AppWrapper>
  ))
  .add('IconLabelButtons', () => (
    <AppWrapper uiTheme={uiTheme}>
      <IconLabelButtons />
    </AppWrapper>
  ))
  .add('CustomizedButtons', () => (
    <AppWrapper uiTheme={uiTheme}>
      <CustomizedButtons />
    </AppWrapper>
  ))
  .add('ButtonBases', () => (
    <AppWrapper uiTheme={uiTheme}>
      <ButtonBases />
    </AppWrapper>
  ));
