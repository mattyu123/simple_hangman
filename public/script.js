// const hangman = require('./helperFunctions')
import { selectRandomWord } from "./helperFunctions.js"

const wordList = ["APPLE", "PEAR","PIZZA","SUSHI","PASTA","NOODLES","COFFEE"]

//clear existing stuff and select a new word when the page is reloaded
window.onload = function() {
  const selectedWord = selectRandomWord(wordList)
}

