import React from 'react';
import { storiesOf } from '@storybook/react';

import SimpleBackdrop from './SimpleBackdrop';
import MultiSectionBackdrop from './MultiSectionBackdrop';

import Chapters from '../Chapters'

storiesOf('Backdrop', module).add('Demos', Chapters({
  subtitle:
    'A backdrop appears behind all other surfaces in an app, displaying contextual and actionable content.',
  chapters: [
    {
      sections: [
        { title: 'Simple Backdrop', sectionFn: () => <SimpleBackdrop /> },
        { title: 'Multisection Backdrop', sectionFn: () => <MultiSectionBackdrop /> },
      ],
    },
  ],
}));
