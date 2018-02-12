import $ from 'jquery'
import { getTopWord } from './fetch-requests'
import { breakDown } from './event-listeners'

$(document).ready(() => {
  getTopWord()
  breakDown()
})
