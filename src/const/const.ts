import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg'
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg'
import { Themes, ThemeIndices } from 'types'
import { satisfy } from 'types/helpers'

export const THEMES = [
  { name: 'light', Icon: SunIcon },
  { name: 'dark', Icon: MoonIcon },
] as const
satisfy<Themes>()(THEMES)
export const INITIAL_THEME_INDEX: ThemeIndices = '0'
