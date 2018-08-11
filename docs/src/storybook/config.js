import { setOptions } from '@storybook/addon-options';
import centered from './decorator-centered';
import { configure, addDecorator } from '@storybook/react';

// const context = require.context('../', true, /Screen\.js$/);
const context = require.context('../pages/demos/', true, /.stories.js$/);

addDecorator(centered);

setOptions({
  name: 'Material UI',
  url: 'https://material-ui.com',
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: false,
  showAddonPanel: false,
  showStoriesPanel: true,
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
