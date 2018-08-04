/* eslint-disable */
export default function RNStyleNames(...args) {
  const styleNames = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (typeof arg === 'number') {
      styleNames.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      styleNames.push(...RNStyleNames(...arg));
    } else if (typeof arg === 'object') {
      for (let key in arg) {
        if (key !== 'undefined' && key !== 'null') {
          if (arg.hasOwnProperty(key) && !Number.isFinite(Number(key))) {
            styleNames.push(arg);
            break;
          } else if (arg.hasOwnProperty(key) && arg[key]) {
            styleNames.push(Number(key));
          }
        }
      }
    }
  }

  return styleNames;
}
