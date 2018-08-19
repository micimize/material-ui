import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

export default function createTypography(palette, typography) {
  const {
    fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif',
    // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    // Apply the CSS properties to all the variants.
    allVariants,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography;

  function emToPx(em){
    return em * fontSize
  }

  return deepmerge(
    {
      round,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      display4: {
        fontSize: 112,
        fontWeight: fontWeightLight,
        fontFamily,
        letterSpacing: emToPx(-.04),
        lineHeight: emToPx(round(128 / 112)),
        marginLeft: emToPx(-.04),
        color: palette.text.secondary,
        ...allVariants,
      },
      display3: {
        fontSize: 56,
        fontWeight: fontWeightRegular,
        fontFamily,
        letterSpacing: emToPx(-.02),
        lineHeight: emToPx(round(73 / 56)),
        marginLeft: emToPx(-.02),
        color: palette.text.secondary,
        ...allVariants,
      },
      display2: {
        fontSize: 45,
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: emToPx(round(51 / 45)),
        marginLeft: emToPx(-.02),
        color: palette.text.secondary,
        ...allVariants,
      },
      display1: {
        fontSize: 34,
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: emToPx(round(41 / 34)),
        color: palette.text.secondary,
        ...allVariants,
      },
      headline: {
        fontSize: 24,
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: emToPx(round(32.5 / 24)),
        color: palette.text.primary,
        ...allVariants,
      },
      title: {
        fontSize: 21,
        fontWeight: fontWeightMedium,
        fontFamily,
        lineHeight: emToPx(round(24.5 / 21)),
        color: palette.text.primary,
        ...allVariants,
      },
      subheading: {
        fontSize: 16,
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: emToPx(round(24 / 16)),
        color: palette.text.primary,
        ...allVariants,
      },
      body2: {
        fontSize: 14,
        fontWeight: fontWeightMedium,
        fontFamily,
        lineHeight: emToPx(round(24 / 14)),
        color: palette.text.primary,
        ...allVariants,
      },
      body1: {
        fontSize: 14,
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: emToPx(round(20.5 / 14)),
        color: palette.text.primary,
        ...allVariants,
      },
      caption: {
        fontSize: 12,
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: emToPx(round(16.5 / 12)),
        color: palette.text.secondary,
        ...allVariants
      },
      button: {
        fontSize: 14,
        // textTransform: 'uppercase',
        fontWeight: fontWeightMedium,
        fontFamily,
        color: palette.text.primary,
        ...allVariants,
      },
    },
    other,
    {
      clone: false, // No need to clone deep
    },
  );
}
