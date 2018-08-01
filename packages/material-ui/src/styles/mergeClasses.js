import warning from 'warning';
import getDisplayName from 'recompose/getDisplayName';

function arrayify(classes) {
  return Array.isArray(classes) ? classes : [classes];
}

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

      warning(
        // It might be good to have a more robust type check, but also less efficient
        !newClasses[key] || typeof newClasses[key] === 'number',
        [
          `Material-UI: the key \`${key}\` ` +
            `provided to the classes property is not valid for ${getDisplayName(Component)}.`,
          `You need to provide a compiled react-native style instead of: ${newClasses[key]}.`,
        ].join('\n'),
      );

      if (newClasses[key]) {
        accumulator[key] = [...arrayify(baseClasses[key]), ...arrayify(newClasses[key])];
      }

      return accumulator;
    }, {}),
  };
}

export default mergeClasses;
