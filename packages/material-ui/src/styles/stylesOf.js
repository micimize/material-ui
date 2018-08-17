function stylesOf<T>(styleMap, selectors) {
  return Object.keys(styleMap)
    .filter(styleName => selectors[styleName])
    .map(styleName => styleMap[styleName]);
}

export default stylesOf;
