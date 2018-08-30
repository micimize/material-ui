import React from 'react';
import withStyles from '../styles/withStyles';
import styleNames from '../styles/react-native-style-names';
import { View } from '../styles/extended-styles/animated';

export const styles = theme => {
  const duration = theme.transitions.duration.short;
  return {
    item: {
      opacity: 0,
      zIndex: 0,
      position: 'absolute',
      transition: {
        easing: 'ease-in-out',
        duration: duration,
        animation: 'stackedFadeOut',
      },
    },
    selected: {
      opacity: 1,
      zIndex: 1,
      transition: {
        easing: 'ease-in-out',
        duration: duration,
        animation: 'stackedFadeIn',
      },
    },
  };
};

function FadeStackItem(props) {
  const { classes, style: styleProp, children, selected, ...other } = props;
  const style = styleNames(classes.item, styleProp, {
    [classes.selected]: selected,
  });
  return (
    <View useNativeDriver style={style} {...other} wow>
      {children}
    </View>
  );
}

export default withStyles(styles, { name: 'MuiFadeStackItem' })(FadeStackItem);
