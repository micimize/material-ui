import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';

const mainColors = [
  'Red',
  'Pink',
  'Purple',
  'Deep Purple',
  'Indigo',
  'Blue',
  'Light Blue',
  'Cyan',
  'Teal',
  'Green',
  'Light Green',
  'Lime',
  'Yellow',
  'Amber',
  'Orange',
  'Deep Orange',
];
const neutralColors = ['Brown', 'Grey', 'Blue Grey'];
const mainPalette = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const altPalette = ['A100', 'A200', 'A400', 'A700'];

export const styles = theme => ({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  name: {
    marginBottom: 60,
  },
  blockSpace: {
    height: 4,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorGroup: {
    padding: 0,
    margin: `0 ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px 0`,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexGrow: 0,
      width: '30%',
    },
  },
  colorValue: {
    ...theme.typography.caption,
    color: 'inherit',
    fontWeight: 'inherit',
  },
  themeInherit: {
    ...theme.typography,
    fontWeight: 500,
  },
});

function getColorBlock(classes, theme, colorName, colorValue, colorTitle) {
  const bgColor = colors[colorName][colorValue];
  const fgColor = theme.palette.getContrastText(bgColor);

  let blockTitle;
  if (colorTitle) {
    blockTitle = <View style={classes.name}>{colorName}</View>;
  }

  let rowStyle = {
    backgroundColor: bgColor,
    color: fgColor,
    padding: 15,
  };

  if (colorValue.toString().indexOf('A1') === 0) {
    rowStyle = {
      ...rowStyle,
      marginTop: 4,
    };
  }

  return (
    <View style={rowStyle} key={colorValue} style={classes.themeInherit}>
      {blockTitle}
      <View style={classes.colorContainer}>
        <Text>{colorValue}</Text>
        <Text style={classes.colorValue}>{bgColor.toUpperCase()}</Text>
      </View>
    </View>
  );
}

function getColorGroup(options) {
  const { classes, theme, color, showAltPalette } = options;
  const cssColor = color.replace(' ', '').replace(color.charAt(0), color.charAt(0).toLowerCase());
  let colorsList = [];
  colorsList = mainPalette.map(mainValue => getColorBlock(classes, theme, cssColor, mainValue));

  if (showAltPalette) {
    altPalette.forEach(altValue => {
      colorsList.push(getColorBlock(classes, theme, cssColor, altValue));
    });
  }

  return (
    <View style={classes.colorGroup} key={cssColor}>
      {getColorBlock(classes, theme, cssColor, 500, true)}
      <View style={classes.blockSpace} />
      {colorsList}
    </View>
  );
}

function Color(props) {
  const { classes, theme } = props;

  return (
    <View style={classes.root}>
      {mainColors.map(mainColor =>
        getColorGroup({
          classes,
          theme,
          color: mainColor,
          showAltPalette: true,
        }),
      )}
      {neutralColors.map(neutralColor =>
        getColorGroup({
          classes,
          theme,
          color: neutralColor,
          showAltPalette: false,
        }),
      )}
    </View>
  );
}

Color.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Color);
