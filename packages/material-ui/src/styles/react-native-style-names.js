function getStyleIdsIfValid(key) {
  if (key) {
    const styles = key
      .split(',')
      .map(Number)
      .filter(Number.isFinite);
    // if we parse numbers, or if undefined / null were interpolated, return styles
    if (styles.length || key.includes('undefined') || key.includes('null')) {
      return styles;
    }
  }
}

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
        const styles = getStyleIdsIfValid(key);
        // getStyleIdsIfValid always returns at least empty for valid interpolations
        if (!Array.isArray(styles)) {
          styleNames.push(arg); // assume valid style
          break;
        } else if (arg[key]) {
          styleNames.push(...styles);
        }
      }
    }
  }
  return styleNames;
}
