import React from 'react';
import { storiesOf } from '@storybook/react-native';

import SimpleList from './SimpleList';
import FolderList from './FolderList';
import InsetList from './InsetList';
import NestedList from './NestedList';
import PinnedSubheaderList from './PinnedSubheaderList';
import CheckboxList from './CheckboxList';
import CheckboxListSecondary from './CheckboxListSecondary';
import SwitchListSecondary from './SwitchListSecondary';
import InteractiveList from './InteractiveList';

import Chapters from '../Chapters'

storiesOf('Lists', module).add('Demos', Chapters({
  subtitle: 'Lists are continuous, vertical indexes of text or images.',
  chapters: [
    {
      sections: [
        { title: 'Simple List', sectionFn: () => <SimpleList /> },
        { title: 'Folder List', sectionFn: () => <FolderList /> },
        { title: 'Inset List', sectionFn: () => <InsetList /> },
        { title: 'Nested List', sectionFn: () => <NestedList /> },
        /* todo: this is done differently for native, see subheader component
           && https://facebook.github.io/react-native/docs/scrollview#stickyheaderindices
        { title: 'Pinned Subheader List', sectionFn: () => <PinnedSubheaderList /> },
        */
        { title: 'Checkbox List', sectionFn: () => <CheckboxList /> },
        { title: 'Checkbox List Secondary', sectionFn: () => <CheckboxListSecondary /> },
        { title: 'Switch List Secondary', sectionFn: () => <SwitchListSecondary /> },
        //{ title: 'Interactive List', sectionFn: () => <InteractiveList /> },
      ],
    },
  ],
}));
