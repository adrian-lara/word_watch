import $ from 'jquery'
import { renderParagraph } from './response-handlers'
import { postWords } from './fetch-requests'

function breakDown() {
  $('button').on('click', function() {
    let text = document.getElementsByTagName('textarea')[0].value.toLowerCase()
    let wordCounts = countWords(text)

    renderParagraph(wordCounts)
    postWords(wordCounts)
  })
}

function countWords(text) {
  return text.split(' ').reduce(function(allWords, word) {
    if (allWords[word]) {
      allWords[word]['value']++
    } else {
      (allWords[word] = { value: 1 })
    }
    return allWords
  }, {})
}

function returnBreakDown() {
  $('textarea').on("keypress", function(event) {
    if (event.originalEvent.key == "Enter") {
      $('button').trigger('click')
    }
  })
}

export {
  breakDown,
  returnBreakDown,
}
