// Array of words
var words = ["aka", "roka", "acis", "dators", "telefons", "kafija", "zieds", "koks", "zivs", "dzivnieks", "lapa"];

// Select a random word from the array
var wordToGuess = words[Math.floor(Math.random() * words.length)];

// Number of lives
var lives = 6;
// Word to display
var displayWord = "_".repeat(wordToGuess.length);

// Function to check if a letter is in the word to guess
function checkLetter() {
  var letter = document.getElementById("letter").value;
  // Check if the letter is in the word
  if (wordToGuess.includes(letter)) {
    // Replace the "_" with the correct letter
    for (var i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === letter) {
        displayWord = displayWord.substr(0, i) + letter + displayWord.substr(i + 1);
      }
    }
    // Check if the word is complete
    if (!displayWord.includes("_")) {
      alert("You won! The word was " + wordToGuess);
    }
  } else {
    lives--;
    if (lives === 0) {
      alert("You lost! The word was " + wordToGuess);
    }
  }
  // Update the displayWord element
  document.getElementById("displayWord").innerHTML = displayWord;
  document.getElementById("lives").innerHTML = "Lives left: " + lives;
}
