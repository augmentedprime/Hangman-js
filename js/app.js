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
function drawMatchingLetters(letters, correct) {

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

function appState() {
    var initialCount = 4;
    var appState = { word: "",
                     guesses: new Set(),
                     hangmanCount: initialCount}
    return appState;
}


//Display Logic
var currentAppState = appState();

function drawHangman($element, livesLeft) {
    var contents;
    switch (livesLeft) {
    case 0:
        contents = '0 lives left. You lost';
        break;
    case 1:
        contents = '1 lives left.';
        break;
    case 2:
        contents = '2 lives left.';
        break;
    case 3:
        contents = '3 lives left.';
        break;
    case 4:
        contents = '4 lives left.';
        break;
    default:
        contents = 'something went horribly wrong';
        break;
    }

    $element.innerHTML = '<h1>' + contents + '</h1>';
}

function drawGame() {
    var $game = $('#game')[0];
    var $hangman = $('#hangman')[0];
    var livesLeft = currentAppState.hangmanCount;

    drawHangman($hangman, livesLeft);
}

function submitGuess() {
    currentGuess = $('#guess')[0].value;
    //make sure it's a new guess
    if (currentAppState.guesses.has(currentGuess) || currentGuess.length>1){
        console.log('invalid guess ' + currentGuess)
        //if guess is new
    } else {
    currentAppState.guesses = currentAppState.guesses.add(currentGuess);
    console.log('Guessed letter: ' + currentGuess);
    if (!isMatch(currentGuess, currentAppState.word)){
        currentAppState.hangmanCount--;
    }
    }
    drawGame();

}

function chooseWord() {
    secretWord = $('#secret-word')[0].value;
    // Note that this is setting the word field of the currentAppState object.
    currentAppState.word = secretWord;
    console.log('Word to guess: ' + currentAppState.word);

    // Buttons
    $('#submit-guess').show();
    $('#new-game').hide();
    $('#choose-word').hide();

    // Inputs
    $('#guess').show();
    $('#secret-word').hide();

    drawGame();
}

function newGame() {
    // Buttons
    $('#submit-guess').hide();
    $('#new-game').hide();
    $('#choose-word').show();

    // Inputs
    $('#guess').hide();
    $('#secret-word').show();
}
