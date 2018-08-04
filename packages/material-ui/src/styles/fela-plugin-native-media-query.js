// https://github.com/rofrischmann/fela/issues/591
import { Dimensions } from 'react-native';
import isPlainObject from 'isobject';
import { match } from 'css-mediaquery';
import { isMediaQuery } from 'fela-utils';

function getOrientation(width, height) {
  return width > height ? 'landscape' : 'portrait';
}

function resolveMediaQuery(style, _, renderer) {
  const { width, height } = Dimensions.get('window');
  Object.keys(style).forEach(property => {
    const value = style[property];
    if (isMediaQuery(property) && isPlainObject(value)) {
      if (
        match(property.slice(6).trim(), {
          type: 'screen',
          orientation: getOrientation(width, height),
          width,
          height,
        })
      ) {
        // eslint-disable-next-line no-underscore-dangle
        renderer._mergeStyle(style, value);
      }

      delete style[property];
    }
  });

  return style;
}

export default () => resolveMediaQuery;
