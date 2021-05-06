export default function getElements(selector, scope = document) {
  return scope.querySelector(selector)
}
