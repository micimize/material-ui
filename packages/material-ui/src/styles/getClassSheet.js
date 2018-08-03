const clone = o => JSON.parse(JSON.stringify(o));

// ({ style: style }) => { style: reactNativeClass }
function getClassSheet(styleSheet, felaRenderer) {
  return Object.keys(styleSheet).reduce((ruleSheet, className) => {
    // eslint-disable-next-line prefer-const
    let style = clone(styleSheet[className]);
    /*
    rules aren't valid atm
    if (typeof style === 'function') {
      ruleSheet[className] = style;
    } else { }
    */
    ruleSheet[className] = felaRenderer.renderRule(() => style, {});
    return ruleSheet;
  }, {});
}

export default getClassSheet;
