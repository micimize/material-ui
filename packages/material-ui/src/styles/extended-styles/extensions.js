import { Platform, StyleSheet } from 'react-native';

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

function normalize(transitionProps) {
  if (Array.isArray(transitionProps)) {
    return transitionProps.reduce(
      (props, prop) =>
        prop === 'elevation' ? [...props, ...normalizedElevation] : [...props, prop],
      [],
    );
  } else if (transitionProps === 'elevation') {
    return normalizedElevation;
  }
  return transitionProps;
}

const styleExtensions = new Map();

// TODO implementing :focus might have been premature
function addExtensions(id, { transition, ':focus': focus }) {
  let extensions = styleExtensions.get(id);
  if (transition) {
    extensions = {
      ...(extensions || {}),
      // overwrite existing transitions
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
  if (extensions) {
    styleExtensions.set(id, extensions);
  }
}

const extensionsKeys = ['transition', ':focus'];

const excludeExtensions = objectFilterer(key => !extensionsKeys.includes(key));
const pickExtensions = objectFilterer(key => extensionsKeys.includes(key));

function getExtensions(style) {
  return typeof style === 'number'
    ? styleExtensions.get(style) || {}
    : Array.isArray(style)
      ? style.reduce((ex, s) => Object.assign(ex, getExtensions(s)), {})
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
