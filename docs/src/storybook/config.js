import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
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
  require('../pages/demos/lists/lists.stories')
  require('../pages/demos/cards/cards.stories')
  require('../pages/demos/selection-controls/selection-controls.stories')
  require('../pages/demos/text-fields/text-fields.stories')
  require('../pages/demos/backdrop/backdrop.stories')
  // context.keys().forEach(context);
}

configure(loadStories, module);


const StorybookUIRoot = getStorybookUI({
  onDeviceUI: true,
  port: 7007,
  host: 'localhost',
});

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
