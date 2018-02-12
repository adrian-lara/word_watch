import $ from 'jquery'

function renderTopWord(word) {
  $('.top-word h3').append(`
      ${Object.keys(word.word)[0]} (${Object.values(word.word)[0]})
    `)
}

function renderParagraph() {
  let text = document.getElementsByTagName('textarea')[0].value
  let wordCounts = text.split(' ').reduce(function(allWords, word) {
    allWords[word.toLowerCase()]++ || (allWords[word.toLowerCase()] = 1)
    return allWords
  }, {})

  console.log(wordCounts)
  Object.keys(wordCounts).forEach(function(word) {
    $('.word-count').append(`
        <p style="font-size: ${wordCounts[word]}em">${word}</p>
      `)
  })
}

export {
  renderTopWord,
  renderParagraph
}
