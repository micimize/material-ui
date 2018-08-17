import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { View } from '@material-ui/core/styles/extended-styles/animated';

export const styles = theme => ({
  item: {
    opacity: 0,
    zIndex: 0,
    position: 'absolute',
    transition: theme.transitions.create(['opacity', 'zIndex'], {
      easing: 'ease-in-out',
      duration: theme.transitions.duration.shortest,
    }),
  },
  selected: {
    opacity: 1,
    zIndex: 1,
    transition: theme.transitions.create(['opacity', 'zIndex'], {
      duration: theme.transitions.duration.shortest,
      easing: 'ease-in-out',
      delay: 150,
    }),
  },
});

function FadeStackItem(props) {
  const { classes, style: styleProp, children, selected, ...other } = props;
  const style = styleNames(classes.item, styleProp, {
    [classes.selected]: selected,
  });
  return (
    <View style={style} {...other}>
      {children}
    </View>
  );
}

export default withStyles(styles, { name: 'MuiFadeStackItem' })(FadeStackItem);
