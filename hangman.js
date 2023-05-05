var words = [ "book", "pencil", "computer", "desk", "chair", "window", "door", "light", "table", "bed", "house", "tree", "car", "dog", "cat", "flower", "grass", "sky", "ocean", "beach", "mountain", "river", "lake", "sun", "moon", "star", "cloud", "rain", "snow", "ice", "storm", "wind", "fire", "earth", "air"];
var wordToGuess = words[Math.floor(Math.random() * words.length)];
var lives = 9;
var displayWord = "_".repeat(wordToGuess.length);
var usedLetters = [];

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
  }

  document.getElementById("displayWord").textContent = displayWord;

  if (!displayWord.includes("_")) {
    alert("You win!");
  }
}

const logo = document.getElementById("logo");

logo.addEventListener("click", function(){
    window.location.href =  "https://www.fiverr.com/kalashinsh/expert-web-and-app-development";
  });

//Canvas
// Set up the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Define the stickman body parts
const headRadius = 20;
const bodyLength = 80;
const armLength = 50;
const legLength = 50;
function drawHangman() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Clear the canvas
  context.clearRect(0, 0, width, height);

  // Draw the gallows
  context.strokeStyle = "black";
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(0.1 * width, 0.9 * height);
  context.lineTo(0.1 * width, 0.1 * height);
  context.lineTo(0.5 * width, 0.1 * height);
  context.lineTo(0.5 * width, 0.2 * height);
  context.stroke();

  // Draw the stickman
  if (incorrectGuesses >= 1) {
    // Head
    context.beginPath();
    context.arc(0.5 * width, 0.3 * height, 0.1 * width, 0, 2 * Math.PI);
    context.stroke();
  }
  if (incorrectGuesses >= 2) {
    // Body
    context.beginPath();
    context.moveTo(0.5 * width, 0.4 * height);
    context.lineTo(0.5 * width, 0.6 * height);
    context.stroke();
  }
  if (incorrectGuesses >= 3) {
    // Left arm
    context.beginPath();
    context.moveTo(0.5 * width, 0.45 * height);
    context.lineTo(0.4 * width, 0.5 * height);
    context.stroke();
  }
  if (incorrectGuesses >= 4) {
    // Right arm
    context.beginPath();
    context.moveTo(0.5 * width, 0.45 * height);
    context.lineTo(0.6 * width, 0.5 * height);
    context.stroke();
  }
  if (incorrectGuesses >= 5) {
    // Left leg
    context.beginPath();
    context.moveTo(0.5 * width, 0.6 * height);
    context.lineTo(0.4 * width, 0.7 * height);
    context.stroke();
  }
  if (incorrectGuesses >= 6) {
    // Right leg
    context.beginPath();
    context.moveTo(0.5 * width, 0.6 * height);
    context.lineTo(0.6 * width, 0.7 * height);
    context.stroke();
  }
}


// Set up the hangman parts
const hangmanParts = [
  function() { // Draw the head
    ctx.beginPath();
    ctx.arc(canvasWidth / 2, canvasHeight / 2 - 100, headRadius, 0, Math.PI * 2);
    ctx.stroke();
  },
  function() { // Draw the body
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2 - 80);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2 + bodyLength);
    ctx.stroke();
  },
  function() { // Draw the left arm
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2 - 50);
    ctx.lineTo(canvasWidth / 2 - armLength, canvasHeight / 2 - 30);
    ctx.stroke();
  },
  function() { // Draw the right arm
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2 - 50);
    ctx.lineTo(canvasWidth / 2 + armLength, canvasHeight / 2 - 30);
    ctx.stroke();
  },
  function() { // Draw the left leg
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2 + bodyLength);
    ctx.lineTo(canvasWidth / 2 - legLength, canvasHeight / 2 + bodyLength + legLength);
    ctx.stroke();
  },
  function() { // Draw the right leg
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2 + bodyLength);
    ctx.lineTo(canvasWidth / 2 + legLength, canvasHeight / 2 + bodyLength + legLength);
    ctx.stroke();
  }
];

// Call this function whenever the player makes an incorrect guess
function updateIncorrectGuesses() {
  incorrectGuesses++;
  hangmanParts[incorrectGuesses - 1]();
}

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

// Draw the hangman
function drawHangman() {
  clearCanvas();
  for (let i = 0; i < incorrectGuesses; i++) {
    hangmanParts[i]();
  }
}

// Call this function to reset the hangman
function resetHangman() {
  incorrectGuesses = 0;
  clearCanvas();
}

// Initialize the game with 0 incorrect guesses
let incorrectGuesses = 0;

// Example usage:
// Call updateIncorrectGuesses() whenever the player makes an incorrect guess
// Call resetHangman() to reset the hangman to its initial state
// Call drawHangman() to draw the current state of the hangman on the canvas









  