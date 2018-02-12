import $ from 'jquery'
import { getTopWord } from './fetch-requests'
import { breakDown, returnBreakDown } from './event-listeners'

$(document).ready(() => {
  getTopWord()
  breakDown()
  returnBreakDown()
})
