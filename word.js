// require letter objects
var Letter = require('./letter.js');

function Word(wrd) {
  var that = this;
  //store the string wrd
  this.word = wrd;
  //collection of letter objects
  this.letters = [];
  this.wordFound = false;

  this.getLets = function() {
    //populate the collection above with new Letter objects
    for(var i = 0; i<that.word.length; i++){
      var newLetter = new Letter(that.word[i]);
      this.letters.push(newLetter);
    }
  };

  //found the current word
  this.findingTheWord = function() {
    if(this.letters.every(function(lttr){
      return lttr.appear === true;
    })){
      this.wordFound = true;
      return true;
    }

  };

  this.wasLetterFound = function(guessedLetter) {
    var letterToSend = 0;
    //iterates through each letter to see if it matches the guessed letter
    this.letters.forEach(function(lttr){
      if(lttr.letter === guessedLetter){
        lttr.appear = true;
        letterToSend++;
      }
    })
    //if guessLetter matches Letter property, the letter object should be shown
    return letterToSend;
  };

  this.renderTheWord = function() {
    var display = '';
    //render the word based on if letters are found or not
    that.letters.forEach(function(lttr){
      var currentLetter = lttr.letterRender();
      display+= currentLetter;
    });

    return display;
  };
}

module.exports = Word;
