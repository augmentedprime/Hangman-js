

//prints the hangman corresponding to the number of tries
function hangmanStringFor(tries) {

var initialCount = 4;

var expected = null;

switch (tries) {
case 0 : expected = 
"___________\n" +
						" |         |\n" +
						" |         O    \n" +
						" |        /|\\\n" +
						" |        / \\\n" +
						" |  ___________\n" +
						" |  |         |\n" +
						"_|__|_________|\n";
						break;
		case 1 : expected =
				"___________\n" +
						" |         |\n" +
						" |         O    \n" +
						" |        /|\\\n" +
						" |            \n" +
						" |  ___________\n" +
						" |  |         |\n" +
						"_|__|_________|\n";
		break;
		case 2 : expected = 
				"___________\n" +
						" |         |\n" +
						" |         O\n" +
						" |         |\n" +
						" |\n" +
						" |  ___________\n" +
						" |  |         |\n" +
						"_|__|_________|\n";
		break;
		case 3 : expected = 
				"___________\n" +
						" |         |\n" +
						" |         O\n" +
						" |\n" +
						" |\n" +
						" |  ___________\n" +
						" |  |         |\n" +
						"_|__|_________|\n";
		break;
		case 4 : expected = 
				"___________\n" +
						" |         |\n" +
						" |\n" +
						" |\n" +
						" |\n" +
						" |  ___________\n" +
						" |  |         |\n" +
						"_|__|_________|\n";
		break;
	}
	return expected;
}


//returns true if a guess letter is in word (doesn't matter if it appears multiple times)
function isMatch(givenLetter, givenWord){

	var i;
	for (i = 0; i<givenWord.length; i++){
		  if (givenLetter.equals(givenWord.substring(i, i+1))){
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



//use to print current status of game, (hangman drawing & letters)
function printGame(stateCount, stateGuess, stateCorrect){
	hangmanStringFor(stateCount);
	drawMatchingLetters(stateGuess, stateCorrect);
}


//Method for accepting the word and letter should go here





function appState(){
	var appState = {word: "",
				guesses: new Set(),
				          hangmanCount: initialCount};
    return appState;
}


function setWord(word){
	appState.word = word;
}

