import $ from 'jquery'
import renderTopWord from './response-handlers'
const url = 'https://wordwatch-api.herokuapp.com'

export default function getTopWord() {
  fetch(`${url}/api/v1/top_word`)
    .then(response => response.json(response))
    .then(word => renderTopWord(word))
}
