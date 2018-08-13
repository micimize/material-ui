import { StyleSheet } from 'react-native';
import * as Extensions from './extensions';

function createWithExtensionsRule(styleSheet) {
  const styles = StyleSheet.create(
    Object.keys(styleSheet).reduce((stripped, styleName) => {
      stripped[styleName] = Extensions.exclude(styleSheet[styleName]);
      return stripped;
    }, {}),
  );
  Object.keys(styles).forEach(styleName => {
    // TODO meta for each extended style
    Extensions.add(styles[styleName], styleSheet[styleName]);
  });
  return { styles };
}

export default createWithExtensionsRule;
