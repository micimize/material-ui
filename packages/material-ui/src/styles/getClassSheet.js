// ({ style: style }) => { style: reactNativeClass }
function getClassSheet(styleSheet, felaRenderer) {
  return Object.keys(styleSheet).reduce((ruleSheet, className) => {
    const styleOrRule = styleSheet[className];
    if (typeof styleOrRule === 'function') {
      ruleSheet[className] = styleOrRule;
    } else {
      ruleSheet[className] = felaRenderer.renderRule(() => styleOrRule, {});
    }
    return ruleSheet;
  }, {});
}

export default getClassSheet;
