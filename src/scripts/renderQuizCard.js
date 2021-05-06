export default function renderQuizCard(card, target = 'document.body') {
  const quizCard = document.createElement('section')
  const { question, answer, tags } = card
  quizCard.classList.add('quiz-card')
  quizCard.innerHTML = `
    <p>${question}</p>
    <button data-answer-button>Show answer</button>
    <p data-answer class="hidden">${answer}</p>
    <ul data-tag-list>
      ${renderTags(tags)}
    </ul>
    `
  target.append(quizCard)
}

function renderTags(tags) {
  tags.forEach(tag => {
    const tagItem = document.createElement('li')
    tagItem.innerText = tag
  })
}
