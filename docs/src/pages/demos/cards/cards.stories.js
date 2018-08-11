import React from 'react';
import { storiesOf } from '@storybook/react';

import MediaControlCard from './MediaControlCard';
import RecipeReviewCard from './RecipeReviewCard';
import SimpleCard from './SimpleCard';
import SimpleMediaCard from './SimpleMediaCard';

storiesOf('Demos', module).addWithChapters('Cards', {
  subtitle: 'Cards contain content and actions about a single subject.',
  chapters: [
    {
      sections: [
        { title: 'Media Control Card', sectionFn: () => <MediaControlCard /> },
        { title: 'Recipe Review Card', sectionFn: () => <RecipeReviewCard /> },
        { title: 'Simple Card', sectionFn: () => <SimpleCard /> },
        { title: 'Simple Media Card', sectionFn: () => <SimpleMediaCard /> },
      ],
    },
  ],
});
