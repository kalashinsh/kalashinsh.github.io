var words = [ "book", "pencil", "computer", "desk", "chair", "window", "door", "light", "table", "bed", "house", "tree", "car", "dog", "cat", "flower", "grass", "sky", "ocean", "beach", "mountain", "river", "lake", "sun", "moon", "star", "cloud", "rain", "snow", "ice", "storm", "wind", "fire", "earth", "air"];
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
    if (lives === 0) {
      alert("You lose!");
      return;
    }
    // Increment the current image index and update the image source
    currentImage++;
    image.src = imageList[currentImage % imageList.length];
  }

  document.getElementById("displayWord").textContent = displayWord;
  document.getElementById("lives").textContent = "Lives: " + lives;

  if (!displayWord.includes("_")) {
    alert("You win!");
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
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      // Add a new page here
      // For example, you can create a new div element and append it to the body
      var newPage = $("<div>").text("This is a new page");
      $("body").append(newPage);
    }
  });
  document.getElementById("about-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "about.html";
  });
  

