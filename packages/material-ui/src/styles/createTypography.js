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
        lineHeight: 128,
        letterSpacing: -.04 * 112,
        marginLeft: -.04 * 112,
        fontWeight: fontWeightLight,
        fontFamily,
        color: palette.text.secondary,
        ...allVariants,
      },
      display3: {
        fontSize: 56,
        lineHeight: 73,
        letterSpacing: -.02 * 56,
        marginLeft: -.02 * 56,
        fontWeight: fontWeightRegular,
        fontFamily,
        color: palette.text.secondary,
        ...allVariants,
      },
      display2: {
        fontSize: 45,
        lineHeight: 51,
        marginLeft: -.02 * 45,
        fontWeight: fontWeightRegular,
        fontFamily,
        color: palette.text.secondary,
        ...allVariants,
      },
      display1: {
        fontSize: 34,
        lineHeight: 41,
        fontWeight: fontWeightRegular,
        fontFamily,
        color: palette.text.secondary,
        ...allVariants,
      },
      headline: {
        fontSize: 24,
        lineHeight: 32.5,
        fontWeight: fontWeightRegular,
        fontFamily,
        color: palette.text.primary,
        ...allVariants,
      },
      title: {
        fontSize: 21,
        lineHeight: 24.5,
        fontWeight: fontWeightMedium,
        fontFamily,
        color: palette.text.primary,
        ...allVariants,
      },
      subheading: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: fontWeightRegular,
        fontFamily,
        color: palette.text.primary,
        ...allVariants,
      },
      body2: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: fontWeightMedium,
        fontFamily,
        color: palette.text.primary,
        ...allVariants,
      },
      body1: {
        fontSize: 14,
        lineHeight: 20.5,
        fontWeight: fontWeightRegular,
        fontFamily,
        color: palette.text.primary,
        ...allVariants,
      },
      caption: {
        fontSize: 12,
        lineHeight: 16.5,
        fontWeight: fontWeightRegular,
        fontFamily,
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
