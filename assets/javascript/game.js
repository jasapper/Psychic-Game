var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];

var functionGuessesLeft = function() {
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var functionLetterGuess = function() {
  this.letterToGuess = this.letterBank[Math.floor(Math.random() * this.letterBank.length)];
};

var functionLettersGuessed = function() {
  document.querySelector('#guessesSoFar').innerHTML = "Letters guessed so far: " + guessedLetters.join(', ');
};

// Reset the game!
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  functionLetterGuess();
  functionGuessesLeft();
  functionLettersGuessed();
}

functionLetterGuess();
functionGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(playerGuess);
  functionGuessesLeft();
  functionLettersGuessed();

        if (guessesLeft > 0){
            if (playerGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "" + wins;
                alert("You guessed the letter!");
                reset();
            }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#losses').innerHTML = "" + losses;
            alert("No more guesses :( Try again!");
            reset();
        }
};