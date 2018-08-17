// TODO take any number of selectors
function stylesOf(styleMap, ...selectors) {
  return selectors.map(selectorMap =>
    Object.keys(styleMap)
      .filter(styleName => selectorMap[styleName])
      .map(styleName => styleMap[styleName]),
  );
}

export default stylesOf;
