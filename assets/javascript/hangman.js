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

(function (window) {
  'use strict';
var hangman={
  westernWords: ["westworld", "the good the bad and the ugly", "the wild bunch", "the searchers", "unforgiven", "true grit", "shane"],
  guessesRemaining: 10,
  mysteryWord: "",
  targetWordArray: [],
  matchesList: [],
  

configHangman: function() {
  console.log(this.westernWords);
  this.mysteryWord=this.westernWords[Math.floor(Math.random() * this.westernWords.length)];
  console.log(this.westernWords);
  this.targetWordArray=[];
  this.matchesList=[];
  for (var i = 0; i < this.mysteryWord.length; i++) {
    this.targetWordArray.push(this.mysteryWord.charAt(i));
    
    }
    for (var i = 0; i < this.mysteryWord.length; i++) {
      this.matchesList.push("-");
    }
    console.log("mysterword: " + this.mysteryWord);
    console.log(this.targetWordArray);
    console.log("matcheslist: " +this.matchesList);
  }//end config hangman
}//end hangman object

hangman.configHangman();

document.onkeyup = function execute(event) {

  var guess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(guess);

  hangman.configHangman();
};


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

