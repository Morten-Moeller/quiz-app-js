export default function getAllElements(selector, scope = document) {
  return scope.querySelectorAll(selector)
}
