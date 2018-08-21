import { expandShorthandProperty } from 'css-property-parser';
import camelcase from 'camelcase';

// FIXME use Symbol
// TODO open bug with haul
// also open bug about their console.logs not working unless you add a console.log in their module above the fork
const discard = 'DISCARD_PROPERTY'
function toNumber(value) {
  return Number(value.replace('px', ''));
}

function toNumberOrPercent(value){
  return value.includes('%') ? value : toNumber(value)
}

function discardOr({ discard: match, or }){
  return value => value === match ? discard : or(value)
}

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
      if (propValue !== discard){
        resolved[camelcase(prop)] = propValue;
      }
      return resolved;
    }, {});
  };
}

function conditionalExpander(shorthand, condition, castMap = {}) {
  const expand = expander(shorthand, castMap);
  return value => (condition(value) ? expand(value) : { [shorthand]: value });
}

const cast = { toNumber, toNumberOrPercent, discard, discardOr };

export { cast, conditionalExpander };

export default expander;
