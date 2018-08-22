//import { setOptions } from '@storybook/addon-options';
import { getStorybookUI, configure } from '@storybook/react-native';

// const context = require.context('../', true, /Screen\.js$/);
const context = require.context('../pages', true, /.stories.js$/);

//import centered from './decorator-centered';
//addDecorator(centered);

/*
setOptions({
  name: 'Material UI',
  url: 'https://material-ui.com',
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: false,
  showAddonPanel: false,
  showStoriesPanel: true,
});
*/

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);


const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
});

export default StorybookUI

