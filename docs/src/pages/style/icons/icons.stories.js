import React from 'react';
import { storiesOf } from '@storybook/react';

import Icons from './Icons';

storiesOf('Icons', module).addWithChapters('Demos', {
  subtitle: 'Guidance and suggestions for using icons with Material-UI.',
  chapters: [
    {
      sections: [{ title: 'Font Icons', sectionFn: () => <Icons /> }],
    },
  ],
});
