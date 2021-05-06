import renderQuizCard from './renderQuizCard'

export default function setupNewCardForm(cards) {
  const form = document.createElement('form')
  form.setAttribute('data-card-form')
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
    <label for="tags>Tags</label>
        <input type="text" name="tags" required/>
    <button data-button>Create new card</button>
    `
  document.body.main.innerHTML = ''
  document.body.main.append(form)
  setupFormButton(form, cards)
}

function setupFormButton(form, array) {
  form.addEventlistener('submit', event => {
    event.preventDefault()
    const { question, answer, tags } = form.elements

    const card = {
      question: question.value,
      answer: answer.value,
      tags: tags.value.split(','),
    }
    array.push(card)
    renderQuizCard(card)
  })
}
