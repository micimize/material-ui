// @flow

import createShallow from './createShallow';
import { sheetsManager } from '../styles/withStyles';

const shallow = createShallow();

// Helper function to extract the classes from a styleSheet.
export default function getClasses(element: Object, options: Object = {}) {
  const sheetsRegistry = {}

  sheetsManager.clear();
  shallow(element, {
    ...options,
    context: {
      ...options.context,
    },
  });

  return sheetsRegistry.registry[0].classes;
}
