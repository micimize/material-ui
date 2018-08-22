import React from 'react';
import { storiesOf } from '@storybook/react-native';

import MediaControlCard from './MediaControlCard';
import RecipeReviewCard from './RecipeReviewCard';
import SimpleCard from './SimpleCard';
import SimpleMediaCard from './SimpleMediaCard';

import Chapters from '../Chapters'

storiesOf('Cards', module).add('Demos', Chapters({
  subtitle: 'Cards contain content and actions about a single subject.',
  chapters: [
    {
      sections: [
        { title: 'Simple Card', sectionFn: () => <SimpleCard /> },
        { title: 'Simple Media Card', sectionFn: () => <SimpleMediaCard /> },
        { title: 'Media Control Card', sectionFn: () => <MediaControlCard /> },
        { title: 'Recipe Review Card', sectionFn: () => <RecipeReviewCard /> },
      ],
    },
  ],
}));
