import { ICONS } from '../utils/icons.js'
const { themeLigth, themeDark } = ICONS[0] // Icons for theme toggle button

// Save the selected theme ('light' or 'dark') in localStorage
export const saveTheme = (theme) => {
  localStorage.setItem('theme', theme)
}

// Retrieve the saved theme from localStorage
export const loadTheme = () => {
  return localStorage.getItem('theme')
}

// Apply the saved theme to the document body and update the toggle icon
export const applySavedTheme = () => {
  const savedTheme = loadTheme()
  const toggleIcon = document.querySelector('#toggle-theme img')

  if (savedTheme === 'dark') {
    document.body.classList.add('dark')
    toggleIcon.src = themeDark
  } else {
    document.body.classList.remove('dark')
    toggleIcon.src = themeLigth
  }
}
