import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkboxes from './Checkboxes';
import CheckboxLabels from './CheckboxLabels';
import CheckboxesGroup from './CheckboxesGroup';
import RadioButtonsGroup from './RadioButtonsGroup';
import RadioButtons from './RadioButtons';
import Switches from './Switches';
import SwitchLabels from './SwitchLabels';
import SwitchesGroup from './SwitchesGroup';
import CustomizedSwitches from './CustomizedSwitches';

storiesOf('Selection Controls', module).addWithChapters('Demos', {
  subtitle: 'Selection controls allow the user to select options.',
  chapters: [
    {
      sections: [
        {
          title: 'Checkboxes',
          sectionFn: () => <Checkboxes />,
        },
        /*
        {
          title: 'Labeld Checkboxes',
          sectionFn: () => <CheckboxLabels />,
        },
        {
          title: 'Checkboxes with FormGroup',
          sectionFn: () => <CheckboxesGroup />,
        },
        {
          title: 'Radio Buttons',
          sectionFn: () => <RadioButtonsGroup />,
        },
        {
          title: 'Standalone Radio Buttons',
          sectionFn: () => <RadioButtons />,
        },
        {
          title: 'Switches',
          sectionFn: () => <Switches />,
        },
        {
          title: 'Switches with FormControlLabel',
          sectionFn: () => <SwitchLabels />,
        },
        {
          title: 'Switches with FormGroup',
          sectionFn: () => <SwitchesGroup />,
        },
        {
          title: 'Customized Switches',
          sectionFn: () => <CustomizedSwitches />,
        },
        */
      ],
    },
  ],
});
