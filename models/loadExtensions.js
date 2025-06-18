/**
 * Fetches the extensions data from the JSON file.
 * @returns {Promise<Array>} A promise resolving to an array of extension objects.
 */

export function loadExtensions () {
  return fetch('/data.json')
    .then(res => res.json())
    .catch(error => {
      console.error('Error al cargar datos:', error)
      return []
    })
}
