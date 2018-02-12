import $ from 'jquery'
import { renderTopWord } from './response-handlers'
const url = 'https://wordwatch-api.herokuapp.com'

function getTopWord() {
  fetch(`${url}/api/v1/top_word`)
    .then(response => response.json(response))
    .then(word => renderTopWord(word))
}

function postWords(wordCounts) {
  console.log(wordCounts)
  Object.keys(wordCounts).forEach(function(word) {
    for (let i = 0; i < wordCounts[word]['value']; i++) {
      let bodyContent = { word: { value: word }}
      fetch(`${url}/api/v1/words`,{
        method: "POST",
        body: JSON.stringify(bodyContent),
        headers: { 'content-type': 'application/json' }
      })
    }
  })

}

export {
  getTopWord,
  postWords,
}
