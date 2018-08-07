import { expandShorthandProperty } from 'css-property-parser';
import camelcase from 'camelcase';

function toNumber(value) {
  return Number(value.replace('px', ''));
}

// property in dash-case
// cast map in camelCase
// takes shorthandvalue and returns it's constituent parts
function expander(shorthand, castMap = {}) {
  return value => {
    const styles = expandShorthandProperty(shorthand, value);
    return Object.keys(styles).reduce((resolved, prop) => {
      const cameled = camelcase(prop);
      let propValue = styles[prop];
      if (castMap[cameled]) {
        propValue = castMap[cameled](propValue);
      }
      resolved[camelcase(prop)] = propValue;
      return resolved;
    }, {});
  };
}

function conditionalExpander(shorthand, condition, castMap = {}) {
  const expand = expander(shorthand, castMap);
  return value => (condition(value) ? expand(value) : { [shorthand]: value });
}

const cast = { toNumber };

export { cast, conditionalExpander };

export default expander;
