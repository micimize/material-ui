import { Platform } from 'react-native';
import expandShorthand, { conditionalExpander, cast } from './shorthand-properties';
import resolveMediaQueries from './resolveMediaQueries';
import createWithExtensionsRule from './createWithExtensionsRule';

function objectFilterer(filter) {
  return raw =>
    Object.keys(raw)
      .filter(filter)
      .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
      }, {});
}

function floor(minimumValue) {
  return value => (value < minimumValue ? minimumValue : value);
}

const validNumber = numberString => Number.isFinite(Number(numberString));

const capitalize = lower => lower.replace(/^\w/, c => c.toUpperCase());

const ignorePropPrefixes = ignorePrefixes => property =>
  Boolean(ignorePrefixes.filter(pre => property.startsWith(pre)).length);

const ignoreSheetPrefixesRule = ignorePrefixes => {
  const ignore = ignorePropPrefixes(ignorePrefixes);
  const strip = objectFilterer(prop => !ignore(prop));
  return styles => ({ styles: strip(styles) });
};

// ignorePrefixes is temporary
function StyleResolver({ customProperties, ignorePrefixes }) {
  const ignore = ignorePropPrefixes(ignorePrefixes);
  return style =>
    Object.keys(style).reduce((resolved, property) => {
      if (customProperties.hasOwnProperty(property)) {
        const resolvedValue = customProperties[property](style[property]);
        Object.assign(resolved, resolvedValue);
      } else if (!ignore(property)) {
        resolved[property] = style[property];
      }
      return resolved;
    }, {});
}

function CustomStyleRule({ customProperties, ignorePrefixes }) {
  const resolve = StyleResolver({ customProperties, ignorePrefixes });
  return styleSheet => ({
    styles: Object.keys(styleSheet).reduce((resolved, styleName) => {
      resolved[styleName] = resolve(styleSheet[styleName]);
      return resolved;
    }, {}),
  });
}

// sheetRules return { styles, meta }
function sheetResolver(...sheetRules) {
  const rules = [...sheetRules, createWithExtensionsRule];
  return sheet =>
    rules.reduce(
      ({ styles, meta }, rule) => {
        let processed = rule(styles);
        return {
          styles: processed.styles,
          meta: { ...meta, ...(processed.meta || {}) },
        };
      },
      { styles: sheet, meta: {} },
    );
}

const borders = ['top', 'right', 'bottom', 'left'].reduce(
  (bs, side) => {
    const pre = `border${capitalize(side)}`;
    bs[pre] = expandShorthand(`border-${side}`, {
      [`${pre}Width`]: cast.toNumber,
    });
    return bs;
  },
  {
    border: expandShorthand('border', {
      borderWidth: cast.toNumber,
    }),
  },
);

const customStyles = CustomStyleRule({
  customProperties: {
    transform: () => ({}),
    willChange: () => ({}),
    pointerEvents: () => ({}),
    fontFamily: () => ({}),
    animation: () => ({}),
    flip: () => ({}),
    fontWeight(prop) {
      return {
        fontWeight: typeof prop === 'number' ? prop.toString() : prop,
      };
    },
    ...borders,
    margin: conditionalExpander('margin', margin => typeof margin !== 'number'),
    elevation: elevation => {
      return Platform.OS === 'android'
        ? { elevation }
        : {
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: {
              width: 0,
              height: floor(0)(elevation),
            },
            shadowRadius: (elevation * 3) / 2,
            shadowOpacity: floor(2.25)(0.25 * elevation),
          };
    },
    padding: conditionalExpander('padding', margin => typeof margin !== 'number'),
    flex(prop) {
      // TODO custom property
      if (typeof prop !== 'string') {
        return { flex: prop };
      }
      const [flexGrow, flexShrink = undefined, _flexBasis = undefined] = prop.split(/\s+/);
      let flexBasis = _flexBasis;
      let expandedStyles = {};

      // handle flexGrow
      if (!(flexGrow && validNumber(flexGrow))) {
        warning(
          true,
          [
            `Material-UI: invalid flex shorthand "${prop}",`,
            'must be <grow number> <shrink number>? <basis>?',
          ].join('\n'),
        );
        return {};
      }
      expandedStyles.flexGrow = Number(flexGrow);

      // handle flexShrink
      if (flexShrink) {
        if (validNumber(flexShrink)) {
          // flexShrink is valid number
          expandedStyles.flexShrink = Number(flexShrink);
        } else if (flexShrink && !flexBasis) {
          // flexShrink position might be valid flexBasis
          flexBasis = flexShrink;
        }
      }

      // handle flexBasis. TODO valid string values unknown
      if (flexBasis && flexBasis !== 'auto') {
        expandedStyles = validNumber(flexShrink) ? Number(flexShrink) : flexShrink;
      }
      return expandedStyles;
    },
  },
  ignorePrefixes: ['[', '#', '@global', '@keyframes', '&'],
});

const trace = (name, debug) => styles => {
  console.log(`[TRACE RENDERER RULE ${name}]`, styles);
  if (debug) {
    debugger;
  }
  return { styles };
};

export default sheetResolver(
  ignoreSheetPrefixesRule(['[', '#', '@global', '@keyframes', '&']),
  resolveMediaQueries,
  customStyles,
);
