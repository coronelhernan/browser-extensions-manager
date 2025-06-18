// Adds a click event listener to the toggle element that changes
// the background color of the label depending on the checkbox state.

export const setStateExtension = () => {
  const toggle = document.getElementById('toogle')
  const label = document.getElementById('switch')
  const checkbox = document.getElementById('checkbox-toggle')

  toggle.addEventListener('click', () => {
    if (checkbox.checked) {
      label.style.background = '#e24f46' // Active state color
    } else {
      label.style.background = '#bdb9a6' // Inactive state color
    }
  })
}
