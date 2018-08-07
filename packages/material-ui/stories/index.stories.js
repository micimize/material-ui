import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { View, Text, TextInput } from 'react-native';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { darken } from '@material-ui/core/styles/colorManipulator';
import AppWrapper from './AppWrapper'
import FullWidthGrid from './FullWidthGrid'

let uiTheme = {
  paletteType: 'light',
  paletteColors: {
    primary: blue,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(pink.A400, 0.08),
    },
  },
  direction: 'ltr',
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <View>
      <Button style={classes.button}>Default</Button>
      <Button color="primary" style={classes.button}>
        Primary
      </Button>
      <Button color="secondary" style={classes.button}>
        Secondary
      </Button>
      <Button disabled style={classes.button}>
        Disabled
      </Button>
      <Button href="#text-buttons" style={classes.button}>
        Link
      </Button>
      <TextInput
        accept="image/*"
        style={classes.input}
        id="flat-button-file"
        multiple
        type="file"
      />
      <Text htmlFor="flat-button-file">
        <Button component="span" style={classes.button}>
          Upload
        </Button>
      </Text>
    </View>
  );
}

const Thing = withStyles(styles)(TextButtons);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module).add('test', () => (
  <AppWrapper uiTheme={uiTheme}>
    <Thing />
  </AppWrapper>
)).add('test2', () => (
  <AppWrapper uiTheme={uiTheme}>
    <FullWidthGrid />
  </AppWrapper>
));
