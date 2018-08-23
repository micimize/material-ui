//import { setOptions } from '@storybook/addon-options';
import { getStorybookUI, configure } from '@storybook/react-native';

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
  require('../pages/demos/buttons/buttons.stories')
  // require('../pages/demos/lists/lists.stories')
  // require('../pages/demos/cards/cards.stories')
  // require('../pages/demos/selection-controls/selection-controls.stories')
  // require('../pages/demos/text-fields/text-fields.stories')
  // context.keys().forEach(context);
}

configure(loadStories, module);


const StorybookUI = getStorybookUI({
  onDeviceUI: true,
  port: 7007,
  host: 'localhost',
});

export default StorybookUI

