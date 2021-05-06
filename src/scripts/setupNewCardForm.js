import getElements from '../utils/getElement'
import renderQuizCard from './renderQuizCard'

export default function setupNewCardForm(cards) {
  const form = document.createElement('form')
  form.setAttribute('data-card-form', '')
  form.setAttribute('class', 'card-form')
  form.innerHTML = `
    <label>Question
        <textarea name="question" rows="5" cols="25" required>
        </textarea>
    </label>
    <label>Answer
        <textarea name="answer" rows="5" cols="25" required>
        </textarea>
    </label>
    <label for="tags">Tags</label>
    <input type="text" id:"tags" name="tags" required />
    <button data-button>Create new card</button>
    `
  const main = getElements('[data-main]')
  main.innerHTML = ''
  main.append(form)
  setupFormButton(form, cards)
}

function setupFormButton(form, array) {
  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question, answer, tags } = form.elements
    const tagsArray = tags.value.split(',')
    console.log(tagsArray)
    const card = {
      question: question.value,
      answer: answer.value,
      tags: tagsArray,
    }
    array.push(card)
    renderQuizCard(card)
  })
}
