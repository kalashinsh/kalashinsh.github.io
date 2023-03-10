var words = ["book", "pencil", "computer", "desk", "chair", "window", "door", "light", "table", "bed", "house", "tree", "car", "dog", "cat", "flower", "grass", "sky", "ocean", "beach", "mountain", "river", "lake", "sun", "moon", "star", "cloud", "rain", "snow", "ice", "storm", "wind", "fire", "earth", "air"];
var wordToGuess = words[Math.floor(Math.random() * words.length)];
var lives = 10;
var displayWord = "_".repeat(wordToGuess.length);
var usedLetters = [];
var hangmanImageIndex = 0;

function checkLetter() {
  var letter = document.getElementById("letter").value;
  
  if (usedLetters.includes(letter)) {
    alert("You have already used that letter. Please choose another one.");
    return;
  }
  
  usedLetters.push(letter);
  document.getElementById("display-used-letters").textContent = "Used letters: " + usedLetters.join(", ");

  if (wordToGuess.includes(letter)) {
    for (var i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === letter) {
        displayWord = displayWord.substr(0, i) + letter + displayWord.substr(i + 1);
      }
    }
  } else {
    lives--;
    if (lives === 0) {
      alert("You lose!");
      return;
    }
    hangmanImageIndex++;
    document.getElementById("hangman-image").src = "images/hangman-" + hangmanImageIndex + ".jpg";
  }

  document.getElementById("displayWord").textContent = displayWord;
  document.getElementById("lives").textContent = "Lives: " + lives;

  if (!displayWord.includes("_")) {
    alert("You win!");
  }
  
  if (hangmanImageIndex === 6) {
    alert("You lose!");
    return;
  }
}


// Function to check if the user inputs the full word
function checkFullWord() {
  var fullWord = document.getElementById("fullWord").value;
  if (fullWord === wordToGuess) {
    alert("You win!");
  } else {
    lives--;
    if (lives === 0) {
      alert("You lose!");
      return;
    }
    hangmanImageIndex++;
    document.getElementById("hangman-image").src = "images/hangman-" + hangmanImageIndex + ".jpg";
    document.getElementById("lives").textContent = "Lives: " + lives;
    alert("Incorrect, try again!");
  }
}

const aboutButton = document.querySelector("a[href='#section1']");
const aboutSection = document.getElementById("about");

aboutButton.addEventListener("click", function(){
    if(aboutSection.style.display === "none"){
        aboutSection.style.display = "block";
    } else {
        aboutSection.style.display = "none";
    }
});

const logo = document.getElementById("logo");

logo.addEventListener("click", function(){
    window.location.href =  "https://www.fiverr.com/kalashinsh/expert-web-and-app-development";
});

  