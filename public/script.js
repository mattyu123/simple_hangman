// const hangman = require('./helperFunctions')
import { selectRandomWord, getBlankLine, getAllGuesses } from "./helperFunctions.js"

const wordList = ["APPLE", "PEAR","PIZZA","SUSHI","PASTA","NOODLES","COFFEE"]

//Select a random word to use for this game
const selectedWord = selectRandomWord(wordList)
console.log(selectedWord)

//display the blank selected word length
document.getElementById('word-guess').textContent = getBlankLine(selectedWord)


//Get the value of the selected button from the button tags
const letterButtons = document.querySelectorAll('.individual-letter-button');

//display the list of all the guessed values here
let clickedLetters = [];

// Function to handle button click
function handleButtonClick(event) {
  const clickedButton = event.target;
  const clickedLetter = clickedButton.value;

  // Check if the letter has already been clicked
  if (!clickedLetters.includes(clickedLetter)) {
    clickedLetters.push(clickedLetter);

    const lettersStr = clickedLetters.join(',')

    //Update the DOM with all the guessed letters
    document.getElementById("guessed-letters").innerHTML = lettersStr

    //Update the DOM with letters to see if they're correct
    document.getElementById('word-guess').textContent = getAllGuesses(clickedLetters,selectedWord)
  }
}

// Attach click event listener to each button
letterButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});