import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Icons from './Icons';

import Chapters from '../../demos/Chapters'

storiesOf('Icons').add('Demos', Chapters({
  subtitle: 'Guidance and suggestions for using icons with Material-UI.',
  chapters: [
    {
      sections: [{ title: 'Font Icons', sectionFn: () => <Icons /> }],
    },
  ],
}));
