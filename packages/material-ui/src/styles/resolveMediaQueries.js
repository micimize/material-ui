// https://github.com/rofrischmann/fela/issues/591
import { Dimensions } from 'react-native';
import deepmerge from 'deepmerge';
import { match } from 'css-mediaquery';
import { isMediaQuery } from 'fela-utils';

function getOrientation(width, height) {
  return width > height ? 'landscape' : 'portrait';
}

// merge valid media queries
function resolveMediaQueries(_styles) {
  const { width, height } = Dimensions.get('window');
  let containsMediaQueries = false;
  const resolved = Object.keys(_styles).reduce((styles, property) => {
    if (isMediaQuery(property)) {
      containsMediaQueries = true;
      if (
        match(property.slice(6).trim(), {
          type: 'screen',
          orientation: getOrientation(width, height),
          width,
          height,
        })
      ) {
        return deepmerge(styles, resolveMediaQueries(_styles[property]).resolved);
      }
    } else {
      styles[property] = _styles[property];
    }
    return styles;
  }, {});

  return { resolved, containsMediaQueries };
}

export default resolveMediaQueries;
