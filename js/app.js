

//returns true if a guess letter is in word (doesn't matter if it appears multiple times)
function isMatch(givenLetter, givenWord){

	  var i;
	  for (i = 0; i<givenWord.length; i++){
		    if (givenLetter.toUpperCase() === givenWord.substring(i, i+1).toUpperCase()){
			      return true;
		    }
	  }
	  return false;
} 


//draws correct letters, spaces, and _ for letters not guessed yet
function drawMatchingLetters(letters, correct){

    var result = "";
    var i = 0;

	  for (i=0; i<correct.length; i++){
		    
		    var currentLetter = correct.substring(i, i+1);
		    if (currentLetter === " "){
			      result += " ";
			      
		    } else if (letters.has(currentLetter)){
			      result += currentLetter;
		    } else result += "_";
	  }
	  return result;
}


//Method for accepting the word and letter should go here





function appState(){

    var initialCount = 4;
	  var appState = {word: "",
				            guesses: new Set(),
				            hangmanCount: initialCount};
    return appState;
}


