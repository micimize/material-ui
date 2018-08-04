// modules are prefix based. Modules are conceptually mutually exclusive
// modules are an array of the form [ [ prefix, rule ] ]
import isPlainObject from 'isobject';

function resolveModules(style, modules, renderer) {
  Object.keys(style).forEach(property => {
    const value = style[property];
    // eslint-disable-next-line no-restricted-syntax
    for (const [prefix, rule] of modules) {
      if (property.startsWith(prefix)) {
        const resolved = rule(value);
        // eslint-disable-next-line no-underscore-dangle
        renderer._mergeStyle(style, rule(value));
        if (!resolved.hasOwnProperty(property)) {
          delete style[property];
        }
        break;
      }
    }
    if (style.hasOwnProperty(property) && isPlainObject(value)) {
      style[property] = resolveModules(value, modules, renderer);
    }
  });
  return style;
}

export default function customProperty(modules) {
  return (style, type, renderer) => resolveModules(style, modules, renderer);
}
