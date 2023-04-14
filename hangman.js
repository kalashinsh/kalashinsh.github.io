var words = ["book", "pencil", "computer", "desk", "chair", "window", "door", "light", "table", "bed", "house", "tree", "car", "dog", "cat", "flower", "grass", "sky", "ocean", "beach", "mountain", "river", "lake", "sun", "moon", "star", "cloud", "rain", "snow", "ice", "storm", "wind", "fire", "earth", "air"];
var wordToGuess = words[Math.floor(Math.random() * words.length)];
var lives = 10;
var displayWord = "_".repeat(wordToGuess.length);
var usedLetters = [];
var hangmanImageIndex = 0;
var correctGuesses = 0;
var wrongGuesses = 0;
var instructionsButton = document.getElementById("instructions-button");
var instructionsModal = document.getElementById("instructions-modal");
var instructionsCloseButton = document.getElementById("instructions-close-button");

instructionsButton.addEventListener("click", function() {
  instructionsModal.style.display = "block";
});

instructionsCloseButton.addEventListener("click", function() {
  instructionsModal.style.display = "none";
});


var form = document.getElementById("myForm");
// Izveidojiet dialoga loga elementu
var modal = document.createElement("div");
modal.classList.add("modal");

// Izveidojiet elementu, lai parādītu aprakstu
var description = document.createElement("p");
description.textContent = "Šeit ir jūsu uzdevums: jums jāmin vārds, izmantojot vārdnīcas vārdus. Jums ir 6 dzīvības, lai minētu pareizos vārdus, un katrs nepareizs burts pievieno 1 līdz 6 dzīvības. Veiksmi!";

// Pievienojiet apraksta elementu dialoga logam
modal.appendChild(description);

// Pievienojiet dialoga logu lapā
document.body.appendChild(modal);

// Kad tiek noklikšķināts uz pogas, parādiet dialoga logu
var helpButton = document.getElementById("help-button");
helpButton.addEventListener("click", function() {
  modal.style.display = "block";
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
});
function checkLetter(event) {
  if (event.keyCode === 13) {
    var letter = document.getElementById("letter").value;
  }
}

function revealNextImage() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    if (images[i].style.display === "none") {
      images[i].style.display = "block";
      return;
    }
  }
}

// Hide the table so that all images are initially hidden
document.getElementById("my-table").style.display = "none";

// Reveal the images one by one after a letter is entered
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
        correctGuesses++;
      }
    }
  } else {
    lives--;
    if (lives === 0) {
      alert("You lose! The word was: " + wordToGuess);
      location.reload();
      return;
    }
    wrongGuesses++;
    hangmanImageIndex++;
    document.getElementById("hangman-image").src = "images/hangman-" + hangmanImageIndex + ".jpg";
  }

  document.getElementById("displayWord").textContent = displayWord;
  document.getElementById("lives").textContent = "Lives: " + lives;

  if (!displayWord.includes("_")) {
    alert("You win! The word was: " + wordToGuess);
    location.reload();
    return;
  }
  
  if (hangmanImageIndex === 6) {
    alert("You lose! The word was: " + wordToGuess);
    location.reload();
    return;
  }
  
  // When a letter is wrong, reveal the next image
  revealNextImage();
  
  // Increase the correct or wrong result depending on the guess
  document.getElementById("correct").textContent = "Correct: " + correctGuesses;
  document.getElementById("wrong").textContent = "Wrong: " + wrongGuesses;
}

// Check if the full word has been guessed
function checkFullWord() {
  var fullWord = document.getElementById("fullWord").value;
  if (fullWord === wordToGuess) {
    alert("You win!");
    return;
  } else {
    lives = 0;
    alert("You lose!");
    return;
  }
}

// Add event listeners to the submit buttons
document.getElementById("submit-letter").addEventListener("click", checkLetter);
document.getElementById("submit-full-word").addEventListener("click", checkFullWord);







  