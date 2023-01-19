// Vārdu skaits
var words = ["aka", "roka", "acis", "dators", "telefons", "kafija", "zieds", "koks", "zivs", "dzivnieks", "lapa" , ];

// Izvēlas random vārdu
var wordToGuess = words[Math.floor(Math.random() * words.length)];

// Dzīvību skaits
var lives = 6;
// Vārds kurš parādas
var displayWord = "_".repeat(wordToGuess.length);

// Funkcija, kura pārbauda vai burts ir vārdā
function checkLetter() {
  var letter = document.getElementById("letter").value;
  // Pārbauda vai burts ir vārdā
  if (wordToGuess.includes(letter)) {
    //Nomaina "_" ar pareizo burtu
    for (var i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === letter) {
        displayWord = displayWord.substr(0, i) + letter + displayWord.substr(i + 1);
      }
    }
    // pārbauda vai vārds ir pareiz
    if (!displayWord.includes("_")) {
      alert("Tu uzvarējI!! Vārds bija  " + wordToGuess);
    }
  } else {
    lives--;
    if (lives === 0) {
      alert("Tu zaudēji! ārds bija " + wordToGuess);
    }
  }
  // Update the displayWord element
  document.getElementById("displayWord").innerHTML = displayWord;
}