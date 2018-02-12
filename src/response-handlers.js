import $ from 'jquery'

function renderTopWord(word) {
  $('.top-word h3').append(`
      ${Object.keys(word.word)[0]} (${Object.values(word.word)[0]})
    `)
}

function renderParagraph() {
  console.log("HI")
}

export {
  renderTopWord,
  renderParagraph
}
