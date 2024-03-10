//Select a random word from the wordList
export function selectRandomWord(words) {
  const min = 0
  const max = words.length
  
  let randomNum = Math.floor(Math.random()*(max-min)+min)
  
  return words[randomNum]
}

//takes a word and spits out blanks equivalent to how many letters
export function getBlankLine(word) {
  let final = ""

  for (const letter of word) {
    if (letter === " ") {
      final += "  "
    } else {
      final += "_ "
    }
  }

  return final;
}

//update the field of guessed letters
export function updateGuessedLetters (letter) {
  document.getElementById("guessed-letters").innerHTML = letter
}

//Refreshes the screen and loads a new game for the user
export function loadNewGame() {
  location.reload()
}

window.loadNewGame = loadNewGame



//update the state of the game with the button value



//attach the loadNewGame to the window object