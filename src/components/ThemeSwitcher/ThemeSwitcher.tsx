import styles from './ThemeSwitcher.module.scss'
import { useEffect, useState } from 'react'
import { ThemeIndices, assertThemeIndex } from 'types'
import { INITIAL_THEME_INDEX, THEMES } from 'const/const'

export const ThemeSwitcher = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState<ThemeIndices>(INITIAL_THEME_INDEX)
  const currentTheme = THEMES[currentThemeIndex].name
  const nextThemeIndex = String((Number(currentThemeIndex) + 1) % THEMES.length)
  assertThemeIndex(nextThemeIndex)
  const nextTheme = THEMES[nextThemeIndex].name
  const NextThemeIcon = THEMES[currentThemeIndex].Icon
  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme)
  }, [currentTheme])
  const toggleTheme = () => {
    setCurrentThemeIndex(nextThemeIndex)
  }

  return (
    <button className={styles.switcher} type="button" onClick={toggleTheme}>
      <span>{nextTheme}</span>
      <NextThemeIcon className={styles.icon} />
    </button>
  )
}
