import getElements from '../utils/getElement'
import getAllElements from '../utils/getAllElements'
import renderQuizCard from './renderQuizCard'
import setupNewCardForm from './setupNewCardForm'

export default function setupNavigation() {
  const navigation = document.createElement('nav')
  navigation.classList.add('navigation')
  navigation.innerHTML = `
  <a href="#" aria-label="home data-nav="home">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
  </a>  
  <a href="#" aria-label="bookmarks data-nav="bookmarks">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  </a>
  <a href="#" aria-label="create cards data-nav="create">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/></svg>
  </a>
  <a href="#" aria-label="profile data-nav="profile">
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="100%" viewBox="0 0 24 24" width="100%" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><circle cx="10" cy="8" r="4"/><path d="M10.67,13.02C10.45,13.01,10.23,13,10,13c-2.42,0-4.68,0.67-6.61,1.82C2.51,15.34,2,16.32,2,17.35V20h9.26 C10.47,18.87,10,17.49,10,16C10,14.93,10.25,13.93,10.67,13.02z"/><path d="M20.75,16c0-0.22-0.03-0.42-0.06-0.63l1.14-1.01l-1-1.73l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L18,11h-2l-0.3,1.49 c-0.4,0.15-0.76,0.36-1.08,0.63l-1.45-0.49l-1,1.73l1.14,1.01c-0.03,0.21-0.06,0.41-0.06,0.63s0.03,0.42,0.06,0.63l-1.14,1.01 l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63L16,21h2l0.3-1.49c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1.01 C20.72,16.42,20.75,16.22,20.75,16z M17,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,18,17,18z"/></g></g></svg>
  </a>
  `

  const footer = getElements('[data-footer]')
  footer.appned(navigation)
  setupNavigationEvent(navigation)
}

function setupNavigationEvent(navigation) {
  const navIcons = getAllElements('[data-nav', navigation)

  navIcons.forEach(handleNavIcon)

  function handleNavIcon(navIcon) {
    const icon = navIcon
    icon.addEventListener('click', event => {
      event.preventDefault()
      const main = getElements('[data-main]')
      main.innerHTML = ''
      if (icon.dataset.nav === 'home') {
        renderQuizCard()
      } else if (icon.dataset.nav === 'create') {
        setupNewCardForm()
      }
    })
  }
}
