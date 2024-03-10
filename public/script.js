// const hangman = require('./helperFunctions')
import { selectRandomWord, getBlankLine, updateGuessedLetters } from "./helperFunctions.js"

const wordList = ["APPLE", "PEAR","PIZZA","SUSHI","PASTA","NOODLES","COFFEE"]

//Select a random word to use for this game
const selectedWord = selectRandomWord(wordList)
console.log(selectedWord)

//display the blank selected word length
document.getElementById('blank-word').textContent = getBlankLine(selectedWord)


//Get the value of the selected button
const selectedButtons = document.querySelectorAll('.individual-letter-button');

console.log("selectedButtons query list",selectedButtons)


selectedButtons.forEach(button => {
  button.addEventListener('click', function() {
      const selectedButtonValue = this.value;
      console.log("Selected button value:", selectedButtonValue);
      updateGuessedLetters(selectedButtonValue)
  });
});

// console.log(selectedButtonValue)
