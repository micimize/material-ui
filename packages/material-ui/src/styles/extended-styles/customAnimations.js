import { initializeRegistryWithDefinitions } from '@micimize/react-native-animatable';

const stackedFadeIn = {
  0: {
    opacity: 0,
  },
  0.5: {
    opacity: 0,
  },
  1: {
    opacity: 1,
  },
};

const stackedFadeOut = {
  0: {
    opacity: 1,
  },
  0.5: {
    opacity: 0,
  },
  1: {
    opacity: 0,
  },
};

export default () =>
  initializeRegistryWithDefinitions({
    stackedFadeIn,
    stackedFadeOut,
  });
