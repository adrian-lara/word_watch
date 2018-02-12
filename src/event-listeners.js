import $ from 'jquery'
import { renderParagraph } from './response-handlers'

function breakDown() {
  $('button').on('click', function() {
    // event.preventDefault()
    renderParagraph()
  })
}

export { breakDown }
