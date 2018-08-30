import { Platform, StyleSheet } from 'react-native';
import deepmerge from 'deepmerge';

function objectFilterer(filter) {
  return raw =>
    Object.keys(raw)
      .filter(filter)
      .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
      }, {});
}

const normalizedElevation =
  Platform.OS === 'android'
    ? ['elevation']
    : ['shadowOffset', 'shadowRadius', 'shadowColor', 'shadowOpacity'];

function normalize(transitionProp) {
  if (Array.isArray(transitionProp)) {
    return transitionProp.reduce(
      (props, prop) =>
        prop === 'elevation' ? [...props, ...normalizedElevation] : [...props, prop],
      [],
    );
  } else if (transitionProp === 'elevation') {
    return normalizedElevation;
  }
  return transitionProp;
}

const styleExtensions = new Map();

// TODO implementing :focus might have been premature
function addExtensions(id, { transition, ':focus': focus, svg }) {
  let extensions = styleExtensions.get(id);
  if (transition) {
    extensions = {
      ...(extensions || {}),
      // overwrite existing transitions
      // note that this basically doesn't do anything.
      // It's merging styles per styleId which is... rare at least
      transition: { ...transition, transition: normalize(transition.transition) },
    };
  }
  if (focus) {
    extensions = {
      ...(extensions || {}),
      // merge existing focus rules
      focus: [...((extensions || {}).focus || []), StyleSheet.create({ focus }).focus],
    };
  }
  if (svg) {
    extensions = {
      ...(extensions || {}),
      svg,
    };
  }
  if (extensions) {
    styleExtensions.set(id, extensions);
  }
}

const extensionsKeys = ['transition', ':focus', 'svg'];

const exclude = objectFilterer(key => !extensionsKeys.includes(key));
const excludeExtensions = raw => {
  const stripped = exclude(raw);
  // empty stylesheets don't result in ids, so we have an "empty" style to track the extensions
  return Object.keys(stripped).length === 0 && Object.keys(raw).length
    ? { backgroundColor: 'transparent' }
    : stripped;
};
const pickExtensions = objectFilterer(key => extensionsKeys.includes(key));

const arrayMerge = (destination, source) => source;

function getExtensions(style) {
  return typeof style === 'number'
    ? styleExtensions.get(style) || {}
    : Array.isArray(style)
      ? style.reduce((ex, s) => deepmerge(ex, getExtensions(s), { arrayMerge }), {})
      : typeof style === 'object'
        ? pickExtensions(style)
        : {};
}

export {
  addExtensions as add,
  getExtensions as get,
  pickExtensions as pick,
  excludeExtensions as exclude,
};
