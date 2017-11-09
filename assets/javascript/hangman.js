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

var words = ["Westworld", "The Good The Bad and the Ugly", "The Wild Bunch", "The Searchers", "Unforgiven", "True Grit"];

var word = words[Math.floor(Math.random() * words.length)];
console.log("word: ", word);   

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

