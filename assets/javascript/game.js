(function(){
    
//VARIABLES ================================================================================

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
               "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let letterToGuess = '';

let wins = 0;

let losses = 0;

let guessesLeft = 10;

let yourGuesses = "";


//letterToGuess = Math.floor(Math.random() * 26) + 1;

//FUNCTIONS ================================================================================

function updateWins() {
    wins += 1;
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function updateLosses() {
    
    losses += 1;
    document.querySelector("#losses").innerHTML = "losses: " + losses;
}

function updateGuessesLeft() {
    
    guessesLeft -= 1;
    console.log(guessesLeft);
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function updateUserGuesses(guess) {
    
    yourGuesses += guess + ", ";
    document.querySelector("#guesses").innerHTML = "Guesses Made so far: " + yourGuesses;
    
}

function randomLetter() {
    
    indexOfRandomLetter = Math.floor(Math.random() * 26); //generate the index of the letter to guess
    
    letterToGuess = letters[indexOfRandomLetter];
    
//    console.log(letterToGuess); //used to troubleshoot output of random letter
    
//    console.log(indexOfRandomLetter); //used to troubleshoot output of random index
    
}
    
function resetStage() {
    
    guessesLeft = 10;
    yourGuesses = "";
    randomLetter(); //reset - pick new random letter
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.querySelector("#guesses").innerHTML = "Guesses Made so far: ";
    
}
    
function setStage() {
    
    randomLetter();
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

//INITIALIZATION
//=============================================================================================

setStage(); //INITIALIZE THE FIRST LETTER TO GUESS
    
//=============================================================================================
   
//MAIN ========================================================================================
//EVENT LISTERNER
document.onkeyup = function(event) {

    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    let userInput = event.key.toLowerCase();
    
    if(userInput === letterToGuess) {
        
        alert("You Guessed Correctly");
        
        updateWins();
        resetStage();
        
    } else {
        
        updateGuessesLeft();
        
        updateUserGuesses(userInput);
        
        if (guessesLeft <= 0) {
            
            alert("You Lose. Try again.");
            
            updateLosses();
            resetStage();
            
        }
    } 
//    console.log(userInput); //used to troubleshoot output
};
    
})();