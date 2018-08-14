import React from 'react';
import { storiesOf } from '@storybook/react';

import SimpleBackdrop from './SimpleBackdrop';
import MultiSectionBackdrop from './MultiSectionBackdrop';

storiesOf('Backdrop', module).addWithChapters('Demos', {
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
});
