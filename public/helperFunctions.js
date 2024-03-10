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

export function getAllGuesses(guessedLetters, word) {
  let splitWord = word.toUpperCase().split("")
  let finalArr = []
  console.log("splitword", splitWord)

  //create a blank copy of the splitWord array
  for (const letter of word) {
    finalArr.push("_")
  }

  //iterate through the word and see if the letters match
  for (let i = 0; i < splitWord.length; i++) {
    if (guessedLetters.includes(splitWord[i])) {
      finalArr[i] = splitWord[i]
    }
  }
  
  console.log("finalArr",finalArr)
  return finalArr.join(',')
}

//Refreshes the screen and loads a new game for the user
export function loadNewGame() {
  location.reload()
}

window.loadNewGame = loadNewGame
