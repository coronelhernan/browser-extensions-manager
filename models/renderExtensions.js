/**
 * Renders the list of extensions inside the container element.
 * @param {Array} arr - Array of extension objects to render.
 */

import { createElementExtension } from './createExtension.js'

export const renderExtensions = (arr) => {
  const list = document.getElementById('list-extensions') // Container of extensions
  list.innerHTML = ''

  arr.forEach(item => {
    const newExtension = createElementExtension(item, arr, renderExtensions)
    list.appendChild(newExtension)
  })

  adjustRowsList(list, arr.length)
}

/**
 * Adjusts the CSS grid rows of the container based on the number of items.
 * @param {HTMLElement} container - The container element holding the extensions.
 * @param {number} totalElements - Total number of extensions.
 */

function adjustRowsList (container, totalElements) {
  let rows

  if (totalElements >= 12) {
    rows = 4
  } else if (totalElements >= 8) {
    rows = 3
  } else {
    rows = 2
  }

  container.style.display = 'grid'
  container.style.gridTemplateRows = `repeat(${rows}, auto)`
  container.style.gap = '1rem'
  container.style.margin = 0
  container.style.padding = 0
}
