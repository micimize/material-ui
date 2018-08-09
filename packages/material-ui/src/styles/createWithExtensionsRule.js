import { StyleSheet } from 'react-native';
import { addExtensions, excludeExtensions } from './extendedStyles';

function createWithExtensionsRule(styleSheet) {
  const styles = StyleSheet.create(
    Object.keys(styleSheet).reduce((stripped, styleName) => {
      stripped[styleName] = excludeExtensions(styleSheet[styleName]);
      return stripped;
    }, {}),
  );
  Object.keys(styles).forEach(styleName => {
    // TODO meta for each extended style
    addExtensions(styles[styleName], styleSheet[styleName]);
  });
  return { styles };
}

export default createWithExtensionsRule;
