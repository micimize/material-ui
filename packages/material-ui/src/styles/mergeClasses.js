import warning from 'warning';
import getDisplayName from 'recompose/getDisplayName';
import styleNames from '@material-ui/core/styles/react-native-style-names';

function mergeClasses(options = {}) {
  const { baseClasses, newClasses, Component, noBase = false } = options;

  if (!newClasses) {
    return baseClasses;
  }

  return {
    ...baseClasses,
    ...Object.keys(newClasses).reduce((accumulator, key) => {
      warning(
        baseClasses[key] || noBase,
        [
          `Material-UI: the key \`${key}\` ` +
            `provided to the classes property is not implemented in ${getDisplayName(Component)}.`,
          `You can only override one of the following: ${Object.keys(baseClasses).join(',')}`,
        ].join('\n'),
      );

      const style = newClasses[key];
      warning(
        // It might be good to have a more robust type check, but also less efficient
        // TODO not all arrays are valid
        !style || typeof style === 'number' || Array.isArray(style),
        [
          `Material-UI: the key \`${key}\` ` +
            `provided to the classes property is not valid for ${getDisplayName(Component)}.`,
          `You need to provide a compiled react-native style instead of: ${style}.`,
        ].join('\n'),
      );

      if (style) {
        accumulator[key] = styleNames(baseClasses[key], style);
      }

      return accumulator;
    }, {}),
  };
}

export default mergeClasses;
