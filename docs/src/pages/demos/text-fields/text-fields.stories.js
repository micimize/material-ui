import React from 'react';
import { storiesOf } from '@storybook/react';

import TextField from './TextFields'
import ComposedTextFields from './ComposedTextField'
import TextFieldMargins from './TextFieldMargins'
import InputAdornments from './InputAdornments'
import Inputs from './Inputs'
import FormattedInputs from './FormattedInputs'
import CustomizedInputs from './CustomizedInputs'
import InputWithIcon from './InputWithIcon'

storiesOf('Text Fields', module).addWithChapters('Demos', {
  subtitle: 'Text Fields allow users to enter text into a UI. They typically appear in forms and dialogs.',
  chapters: [
    {
      sections: [
        { title: 'Text Field', sectionFn: () => <TextField /> },
        { title: 'Composed Text Field', sectionFn: () => <ComposedTextFields /> },
        { title: 'Text Field Margins', sectionFn: () => <TextFieldMargins /> },
        { title: 'Input Adornments', sectionFn: () => <InputAdornments /> },
        { title: 'Inputs', sectionFn: () => <Inputs /> },
        { title: 'Formatted Inputs', sectionFn: () => <FormattedInputs /> },
        { title: 'Customized Inputs', sectionFn: () => <CustomizedInputs /> },
        { title: 'Unput With Icon', sectionFn: () => <InputWithIcon /> },
      ],
    },
  ],
});
