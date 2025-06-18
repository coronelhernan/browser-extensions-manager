import { ICONS } from '../utils/icons.js'
const { themeLigth, themeDark } = ICONS[0]

let isDark = false

// Toggles between light and dark themes, updates the body class,
// changes the toggle icon, and saves the current theme in localStorage.

export const toggleTheme = () => {
  const toggleIcon = document.querySelector('#toggle-theme img')

  isDark = !isDark // Switch theme state

  if (isDark) {
    document.body.classList.add('dark')
    toggleIcon.src = themeDark
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.remove('dark')
    toggleIcon.src = themeLigth
    localStorage.setItem('theme', 'light')
  }
}
