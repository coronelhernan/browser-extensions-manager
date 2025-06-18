/**
 * Creates a DOM article element representing a single extension.
 * It includes a logo, name, description, a toggle switch for activation,
 * and a remove button that updates the parent array and rerenders the list.
 *
 * @param {Object} item - The extension object (contains name, description, logo, and isActive).
 * @param {Array} arr - The array of extensions (used to remove items).
 * @param {Function} renderCallback - A callback function to rerender the list after changes.
 * @returns {HTMLElement} The constructed article element.
 */

export const createElementExtension = (item, arr, renderCallback) => {
  const article = document.createElement('article')
  article.classList.add('extension-item')

  const checkedAttr = item.isActive ? 'checked' : ''

  // Create the card's inner HTML
  article.innerHTML = `
    <aside>
      <img src="${item.logo}" alt="" />
    </aside>
    <main>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </main>
    <footer>
      <button class="remove-btn">Remove</button>
      <div class="container toggle-container">
        <label class="switch">
          <input type="checkbox" class="checkbox-toggle" ${checkedAttr} />
          <div></div>
        </label>
      </div>
    </footer>`

  // Select internal elements
  const toggleContainer = article.querySelector('.toggle-container')
  const btnRemoveExtension = article.querySelector('.remove-btn')
  const label = article.querySelector('.switch')
  const checkbox = article.querySelector('.checkbox-toggle')

  // Set initial background color based on toggle state
  label.style.background = checkbox.checked ? '#b52d20' : '#bdb9a6'

  // Handle removal of extension
  btnRemoveExtension.addEventListener('click', () => {
    const index = arr.indexOf(item)
    if (index !== -1) {
      arr.splice(index, 1)
      renderCallback(arr) // Re-render updated list
    }
  })

  // Handle toggle switch color change
  toggleContainer.addEventListener('click', () => {
    setTimeout(() => {
      label.style.background = checkbox.checked ? '#b52d20' : '#bdb9a6'
    }, 10)
  })

  return article
}
