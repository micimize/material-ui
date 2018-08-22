import 'haul/hot';
//import { setOptions } from '@storybook/addon-options';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Storybook from './docs/src/storybook/config'

AppRegistry.registerComponent(appName, () => Storybook);

