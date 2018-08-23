import React from 'react';
import { storiesOf } from '@storybook/react-native';

import TextButtons from './TextButtons';
import OutlinedButtons from './OutlinedButtons';
import ContainedButtons from './ContainedButtons';
import FloatingActionButtons from './FloatingActionButtons';
// /*
// import FloatingActionButtonZoom from './FloatingActionButtonZoom';
// */
// import ButtonSizes from './ButtonSizes';
// import IconButtons from './IconButtons';
// import IconLabelButtons from './IconLabelButtons';
// import CustomizedButtons from './CustomizedButtons';
// import ButtonBases from './ButtonBases';

import Chapters from '../Chapters'

storiesOf('Buttons', module).add('Demos', Chapters({
  subtitle: 'Buttons allow users to take actions, and make choices, with a single tap.',
  chapters: [
    {
      sections: [
        { title: 'Text Buttons', sectionFn: () => <TextButtons /> },
        { title: 'Outlined Buttons', sectionFn: () => <OutlinedButtons /> },
        { title: 'Contained Buttons', sectionFn: () => <ContainedButtons /> },
        { title: 'Floating Action Buttons', sectionFn: () => <FloatingActionButtons /> },
        // //{ title: 'Floating Action Button Zoom', sectionFn: () => <FloatingActionButtonZoom /> },
        // { title: 'Button Sizes', sectionFn: () => <ButtonSizes /> },
        // { title: 'Icon Buttons', sectionFn: () => <IconButtons /> },
        // { title: 'Icon Label Buttons', sectionFn: () => <IconLabelButtons /> },
        // { title: 'Customized Buttons', sectionFn: () => <CustomizedButtons /> },
        // { title: 'Button Bases', sectionFn: () => <ButtonBases /> },
      ],
    },
  ],
}));
