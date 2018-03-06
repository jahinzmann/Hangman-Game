/* Stuff I need:

1. An Array of words (word bank)
2. An array of strings:
a. Take the word, and make it an array of letters (an empty array for the target word, perhaps?)
b. Check the letters in the array against the letter entered by the player
c. Make sure to classify the entry as either in or not in the array (think about what operators will be needed to do this)
3. Letter entry
4. Letter Guess
5. Number of guesses remaining
6. win/loss record

To use later:

Math.floor(x)
math.random(x) (choose a random word with a for-loop)

Wrap shit in functions!
*/

//Game object wrapped in a IFFE
(function (window) {
  'use strict';
var hangman={
  guessesRemaining: 10,
  westernWords: ["westworld", "the good the bad and the ugly", "the wild bunch", "the searchers", "unforgiven", "true grit", "shane"],
  lettersGuessed: [],
  mysteryWord: "",
  targetWordArray: [],
  matchesList: [],
  shotsHit: 0,
  
//Actual game function: console logs work...
configHangman: function() {
  console.log(this.westernWords);
  this.mysteryWord=this.westernWords[Math.floor(Math.random() * this.westernWords.length)];
  console.log(this.westernWords);
  this.targetWordArray=[];
  this.matchesList=[];

  //Populates targetWordArray with the mystery word from westernWords
  for (var i = 0; i < this.mysteryWord.length; i++) {
    this.targetWordArray.push(this.mysteryWord.charAt(i));
    }
    //Pushes in a dash for each letter of the chosen mysteryWord
    for (var i = 0; i < this.mysteryWord.length; i++) {
      this.matchesList.push("-");
    }
    //testing...1..2..3...
    console.log("mysterword: " + this.mysteryWord);
    console.log(this.targetWordArray);
    console.log("matcheslist: " +this.matchesList);

    //actually writing the basic setup to the DOM
    document.getElementById("hangmanWord").innerHTML = this.matchesList.join(" "); 
    this.guessesRemaining = 10;
    document.getElementById("GuessesRemaining").innerHTML = this.guessesRemaining;
    this.lettersGuessed = [];
    document.getElementById("lettersGuessed").innerHTML = " ";
    },
    
//Dynamically-updating the DOM with letters guessed: correct and incorrect
    updateLettersGuessed: function(incorrectLetter) {
      this.lettersGuessed.push(incorrectLetter);
      document.getElementById("lettersGuessed").innerHTML = this.lettersGuessed.join(", ");
      this.guessesRemaining--;
      document.getElementById("GuessesRemaining").innerHTML = this.guessesRemaining;
    },

//Game logic
    GameOver: function() {
      if (this.matchesList.indexOf("-") == -1) {
        this.shotsHit++;
        document.getElementById("targetsHit").innerHTML = this.shotsHit;
        return true;
      } else if (this.guessesRemaining > 0) {
        return false;
      } else {
        return true;
      }
    },
// View
showTarget: function(letterPosition) {
  this.matchesList[letterPosition] = this.targetWordArray[letterPosition];
  this.targetWordArray[letterPosition] = "-";
  document.getElementById("hangmanWord").innerHTML = hangman.matchesList.join(" ");
}

}; //end config hangman

  hangman.configHangman();

  document.onkeyup = function execute(event) {

  var guess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(guess);
  var letterOrder = hangman.targetWordArray.indexOf(guess);
  console.log(letterOrder);

  if (letterOrder >= 0) {
    while (letterOrder >= 0) {
      hangman.showTarget(letterOrder);
      var letterOrder = hangman.targetWordArray.indexOf;
      }
    } else {
      hangman.updateLettersGuessed(guess);
    }
    //new game
    if (hangman.GameOver()) {
      hangman.configHangman();
    }
  
  
  
}; //end of key input functionality



//} //end hangman object



})(window);//end IIFE














/*var westernWords = ["westworld", "the good the bad and the ugly", "the wild bunch", "the searchers", "unforgiven", "true grit", "shane"];
hangman(westerWords);
function hangman(westernWords){
  
console.log(westernWords);
};
var words = words[Math.floor(Math.random() * words.length)];
console.log("westernWords: ", words);   

var answerArray = [];

for (var i = 0; i < word.length; i++) {
    
  answerArray[i] = "";
    
}
console.log("answerArray: ", answerArray);   
var remainingLetters = word.length;

//var guess = prompt("Guess a letter, or click Cancel to stop playing.");

if (guess === null) {

} else if (guess.length !== 1) {

  alert("Please enter a single letter.");

} else {

  for (var j = 0; j < word.length; j++) {
      
    if (word[j] === guess) {
    
      answerArray[j] = guess;
  
      remainingLetters--;
    
    }
      
  }

}      

        /*document.addEventListener("DOMContentLoaded", function(event) {
            var MorriconeGoodBadUgly = new Audio('/assets/sounds/Ennio_Morricone-GoodBadUgly.ogg');
            MorriconeGoodBadUgly.play();*/

