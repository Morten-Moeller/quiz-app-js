import getElements from '../utils/getElement'

export default function renderQuizCard(card) {
  const quizCard = document.createElement('section')
  const { question, answer, tags } = card
  quizCard.classList.add('quiz-card')
  quizCard.innerHTML = `
    <p>${question}</p>
    <button data-answer-button>Show answer</button>
    <p data-answer class="hidden">${answer}</p>
    <ul data-tag-list>
     
    </ul>
    `
  const main = getElements('[data-main]')
  main.append(quizCard)
  renderTags(tags, quizCard)
}

function renderTags(tags, quizCard) {
  console.log(tags)
  tags.forEach(tag => {
    const tagItem = document.createElement('li')
    console.log(tag)
    tagItem.innerText = tag
    quizCard.append(tagItem)
  })
}
