import { Dimensions } from 'react-native';
import deepmerge from 'deepmerge';
import { match } from 'css-mediaquery';

function isMediaQuery(property) {
  return property.substr(0, 6) === '@media';
}

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
        return deepmerge(styles, resolveMediaQueries(_styles[property]).styles);
      }
    } else if (Array.isArray(_styles[property]) || !(typeof _styles[property] === 'object')) {
      styles[property] = _styles[property];
    } else {
      const nested = resolveMediaQueries(_styles[property]);
      containsMediaQueries = containsMediaQueries || nested.containsMediaQueries;
      styles[property] = nested.styles;
    }
    return styles;
  }, {});

  return { styles: resolved, meta: { containsMediaQueries } };
}

export default resolveMediaQueries;
