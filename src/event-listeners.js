import $ from 'jquery'
import { renderParagraph } from './response-handlers'

function breakDown() {
  $('button').on('click', function() {
    renderParagraph()
  })
}

export { breakDown }
