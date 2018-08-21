import { expandShorthandProperty } from 'css-property-parser';
import camelcase from 'camelcase';

function toNumber(value) {
  return Number(value.replace('px', ''));
}

// FIXME use Symbol
// TODO open bug with haul
// also open bug about their console.logs not working unless you add a console.log in their module above the fork
const discard = 'DISCARD_PROPERTY'

// property in dash-case
// cast map in camelCase
// takes shorthandvalue and returns it's constituent parts
function expander(shorthand, castMap = {}) {
  return value => {
    const styles = expandShorthandProperty(shorthand, value);
    return Object.keys(styles).reduce((resolved, prop) => {
      const cameled = camelcase(prop);
      if (castMap[cameled] === discard) {
        return resolved;
      }
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

const cast = { toNumber, discard };

export { cast, conditionalExpander };

export default expander;
