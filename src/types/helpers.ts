import { THEMES } from 'const'
import { ThemeIndices } from 'types/common'
import { AssertionError } from 'assertion-error'

export function satisfy<TSatisfied>(): <T extends TSatisfied>(value: T) => T {
  return (value) => value
}

export function assertThemeIndex(themeIndex: string): asserts themeIndex is ThemeIndices {
  if (Number(themeIndex) >= THEMES.length) {
    throw new AssertionError(`${themeIndex} is not ThemeIndices`)
  }
}
