export default function loadFromLocalStorage(key) {
  const jsonString = localStorage.getItem(key)
  return JSON.parse(jsonString)
}
