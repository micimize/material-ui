import { StyleProp } from 'react-native';

interface Sheet<T> {
  [styleName: string]: StyleProp<T>;
}

type StyleSelectors<Sheet extends { [K: string]: any }> = Partial<
  Record<keyof Sheet, boolean | null | undefined | object>
>;

declare function stylesOf<T>(
  styleMap: Sheet<T>,
  ...selectors: StyleSelectors<Sheet<T>>[]
): Array<StyleProp<T>>[];

export default stylesOf;
