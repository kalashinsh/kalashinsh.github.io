var words = ["book", "pencil", "computer", "desk", "chair", "window", "door", "light", "table", "bed", "house", "tree", "car", "dog", "cat", "flower", "grass", "sky", "ocean", "beach", "mountain", "river", "lake", "sun", "moon", "star", "cloud", "rain", "snow", "ice", "storm", "wind", "fire", "earth", "air"];
var wordToGuess = words[Math.floor(Math.random() * words.length)];
var lives = 10;
var displayWord = "_".repeat(wordToGuess.length);
var usedLetters = [];


// Array to store image URLs
var imageList = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  // ... add more images as needed
];

// Variable to keep track of current image
var currentImage = 0;

// Get reference to the image element
var image = document.getElementById("image");

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
    document.getElementById("lives").textContent = "Lives: " + lives;
    currentImage++;
    if (currentImage >= imageList.length) {
      alert("You lose!");
      return;
    }
    image.src = imageList[currentImage];
  }
  if (displayWord === wordToGuess) {
    alert("You win!");
    return;
  }
  document.getElementById("displayWord").textContent = displayWord;
}
document.querySelector("form").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkLetter();
  }
});

let correctCount = 0;
let incorrectCount = 0;
let scoreCount = 0;

// Update the correct count
function updateCorrectCount() {
  correctCount += 1;
  document.querySelector("#correct-count").innerHTML = correctCount;
  updateScoreCount();
}

// Update the incorrect count
function updateIncorrectCount() {
  incorrectCount += 1;
  document.querySelector("#incorrect-count").innerHTML = incorrectCount;
  updateScoreCount();
}

// Update the score count
function updateScoreCount() {
  scoreCount = correctCount - incorrectCount;
  document.querySelector("#score-count").innerHTML = scoreCount;
}

// Initialize the score
let score = 0;

// Function to update the score
function updateScore(value) {
  score += value;
  // Update the score display on the page
  document.getElementById("score").innerHTML = "Score: " + score;
}

// Table image function
function showTableImage() {
  var tableImage = document.createElement("img");
  tableImage.src = "table.jpg";
  tableImage.alt = "Table";
  document.body.appendChild(tableImage);
  var words = ["book", "pencil", "computer", "desk", "chair", "window", "door", "light", "table", "bed", "house", "tree", "car", "dog", "cat", "flower", "grass", "sky", "ocean", "beach", "mountain", "river", "lake", "sun", "moon", "star", "cloud", "rain", "snow", "ice", "storm", "wind", "fire", "earth", "air"];
  var wordToGuess = words[Math.floor(Math.random() * words.length)];
  var lives = 10;
  var displayWord = "_".repeat(wordToGuess.length);
  var usedLetters = [];
  
  
  // Array to store image URLs
  var imageList = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    // ... add more images as needed
  ];
  
  // Variable to keep track of current image
  var currentImage = 0;
  
  // Get reference to the image element
  var image = document.getElementById("image");
  
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
      document.getElementById("lives").textContent = "Lives: " + lives;
      currentImage++;
      if (currentImage >= imageList.length) {
        alert("You lose!");
        return;
      }
      image.src = imageList[currentImage];
    }
    if (displayWord === wordToGuess) {
      alert("You win!");
      return;
    }
    document.getElementById("displayWord").textContent = displayWord;
  }
  document.querySelector("form").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      checkLetter();
    }
  });
  
  let correctCount = 0;
  let incorrectCount = 0;
  let scoreCount = 0;
  
  // Update the correct count
  function updateCorrectCount() {
    correctCount += 1;
    document.querySelector("#correct-count").innerHTML = correctCount;
    updateScoreCount();
  }
  
  // Update the incorrect count
  function updateIncorrectCount() {
    incorrectCount += 1;
    document.querySelector("#incorrect-count").innerHTML = incorrectCount;
    updateScoreCount();
  }
  
  // Update the score count
  function updateScoreCount() {
    scoreCount = correctCount - incorrectCount;
    document.querySelector("#score-count").innerHTML = scoreCount;
  }
  
  // Initialize the score
  let score = 0;
  
  // Function to update the score
  function updateScore(value) {
    score += value;
    // Update the score display on the page
    document.getElementById("score").innerHTML = "Score: " + score;
  }
  
  // Table image function
  function showTableImage() {
    var tableImage = document.createElement("img");
    tableImage.src = "table.jpg";
    tableImage.alt = "Table";
    document.body.appendChild(tableImage);
    function showTableImage() {
      const tableImage = document.createElement('img');
      tableImage.src = 'table.png';
      tableImage.alt = 'Table Image';
      tableImage.classList.add('table-image');
      
      const tableContainer = document.querySelector('.table-container');
      tableContainer.appendChild(tableImage);
    }
  }      
  

