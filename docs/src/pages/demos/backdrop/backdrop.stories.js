import React from 'react';
import { storiesOf } from '@storybook/react-native';

import SimpleBackdrop from './SimpleBackdrop';
import MultiSectionBackdrop from './MultiSectionBackdrop';

storiesOf('Backdrop', module)
  .add('Simple BackDrop', () => <SimpleBackdrop/>)
  .add('MultiSection BackDrop', () => <MultiSectionBackdrop/>)