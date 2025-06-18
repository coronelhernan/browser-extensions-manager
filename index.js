/*
 * Project: Extension Manager Interface – Frontend Mentor Challenge
 * Author: Hernán Coronel
 *
 * Description:
 *   Main entry point for the app.
 *   - Loads and renders the list of browser extensions.
 *   - Handles theme toggling (light/dark).
 *   - Manages filter buttons for active/inactive/all extensions.
 */

import { ICONS } from './utils/icons.js'
import { loadExtensions } from './models/loadExtensions.js'
import { renderExtensions } from './models/renderExtensions.js'
import { toggleTheme } from './toggles/themeToogle.js'
import { applySavedTheme } from './storage/storage.js'

// Holds the current list of extensions
let extensions = []

// Destructure logo from imported icons
const { logo } = ICONS[0]

document.addEventListener('DOMContentLoaded', async () => {
  // Load and insert SVG logo dynamically
  fetch(logo)
    .then(res => res.text())
    .then(svgContent => {
      const logoContainer = document.getElementById('logo-container')
      logoContainer.innerHTML = svgContent

      const svg = logoContainer.querySelector('svg')
      if (svg) svg.setAttribute('id', 'logo')
    })

  // Apply previously saved theme (light or dark)
  applySavedTheme()

  // Get references to DOM elements
  const toggle = document.querySelector('#toggle-theme')
  const btnAllExtensions = document.getElementById('btn-all')
  const btnFilterActiveExtensions = document.getElementById('btn-active')
  const btnFilterInactiveExtensions = document.getElementById('btn-inactive')

  // Load extensions data and render the list
  extensions = await loadExtensions()
  renderExtensions(extensions)

  // Highlight "All" button by default
  btnAllExtensions.classList.add('extension-active')

  // Helper to activate only the selected filter button
  const setActiveButton = (activeBtn) => {
    [btnAllExtensions, btnFilterActiveExtensions, btnFilterInactiveExtensions]
      .forEach(btn => btn.classList.remove('extension-active'))

    activeBtn.classList.add('extension-active')
  }

  // EVENT HANDLERS
  toggle.addEventListener('click', toggleTheme)

  btnAllExtensions.addEventListener('click', () => {
    const isActive = btnAllExtensions.classList.contains('extension-active')
    renderExtensions(extensions)

    if (isActive) {
      btnAllExtensions.classList.remove('extension-active')
    } else {
      btnFilterActiveExtensions.classList.remove('extension-active')
      btnFilterInactiveExtensions.classList.remove('extension-active')
      btnAllExtensions.classList.add('extension-active')
    }
  })

  btnFilterActiveExtensions.addEventListener('click', () => {
    const extensionsActive = extensions.filter(extension => extension.isActive)
    renderExtensions(extensionsActive)
    setActiveButton(btnFilterActiveExtensions)
  })

  btnFilterInactiveExtensions.addEventListener('click', () => {
    const extensionsNotActive = extensions.filter(extension => !extension.isActive)
    renderExtensions(extensionsNotActive)
    setActiveButton(btnFilterInactiveExtensions)
  })
})
