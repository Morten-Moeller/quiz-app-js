export default function setupNewCardForm() {
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
}
