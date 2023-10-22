import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg'
import { THEMES } from 'const'

export type Theme = {
  name: string
  Icon: typeof MoonIcon
}

export type Themes = readonly Theme[]

export type ThemeIndices = Exclude<keyof typeof THEMES, keyof []>
