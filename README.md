<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman Game</title>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    </head>    
    <link rel="stylesheet" type="text/css" href="hangman.css">
    <link rel="stylesheet" href="animate.css">
    <style>
      #login-form {
        position: absolute;
        top: 220px;
        right: 100px;
      }
    </style>
</head>
<body>
  <div id="menu">
      <ul>
        <li><a href="about.html" id="about-link">About</a></li>  
  <div id="logo">
    <img src="logo.png" alt="Logo">
  </div>
  <div id="login-form">
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
      <button type="submit">Submit</button>
    </form>
  </div>
<div id="scoreboard">
  <div id="correct">Correct: <span id="correct-count">0</span></div>
  <div id="incorrect">Incorrect: <span id="incorrect-count">0</span></div>
  <div id="score">Score: <span id="score-count">0</span></div>
</div>
  <p id="displayWord"></p>
  <p id="lives"></p>
  <div id="used-letters">
    <p id="display-used-letters">Used letters: </p>
  </div>
  <form>
    <label for="letter">Write a letter:</label>
    <input type="text" id="letter" name="letter">
    <button type="button" onclick="checkLetter()">Guess</button>
  </form>
  <div class="copyright">MK Copyright © 2023</div>
  <script src="hangman.js"></script>
  <section id="section1" class="about">
    <h1>About</h1>
    <p>This is the about section for the hangman game.</p>
  </section>
</body>
</html>
