// const hangman = require('./helperFunctions')
import { selectRandomWord, getBlankLine, showUserGuesses, loadNewGame } from "./helperFunctions.js"

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

//Track how many guesses the user made
let remainingGuesses = 0

// Function to handle button click
function handleButtonClick(event) {
  const clickedButton = event.target;
  const clickedLetter = clickedButton.value;

  //If the user already selected that letter before, let them know
  if (clickedLetters.includes(clickedLetter)) {
    alert("You have already selected that letter, select another one")
  } 
  
  else if (!clickedLetters.includes(clickedLetter)) {
    clickedLetters.push(clickedLetter);
  
    const lettersStr = clickedLetters.join(',')
  
    //Update the DOM with all the guessed letters
    document.getElementById("guessed-letters").innerHTML = lettersStr
  }

  //Update the DOM with the word and user's guesses
  document.getElementById('word-guess').textContent = showUserGuesses(clickedLetters,selectedWord)

  //If the user is out of guesses, then the game ends and a new one begins
  if (remainingGuesses === 0) {
    alert("You are out of guesses, you have lost")
    loadNewGame()
  }
}

// Attach click event listener to each button
letterButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});