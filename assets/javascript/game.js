
    //=============================
    //VARIABLES
    //=============================

    var allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var guesses = [];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;

//==============================================
// EVENT LISTENER/MAIN CODE
//==============================================
//listens for keypress and prints it guessedLetters
    addEventListener("keydown", function(event) {

//when a key is pressed its stored in var userGuess
        var userGuess = event.key; 
        var compGuess = allLetters[Math.floor(Math.random() * allLetters.length)];
        console.log(compGuess);
        console.log(event.key);

     //UPDATES SCORE BASED ON CORRECT OR INCORRECT GUESS
        if (compGuess === event.key) {
            wins++;
        } else if (compGuess != event.key) {
            losses++;
            guessesLeft--;
             document.querySelector('#guessedLetters').innerHTML = "guesses " + guesses[event.key]; //prints guessed letters 
    
    //PRINTS RESULTS OF IF STATEMENTS TO HTML #game <div>
            var html = "<p>wins: " + wins + "</p>" +
                "<p> losses: " + losses + "</p>" +
                "<p> guesses left: " + guessesLeft + "</p>";

            document.querySelector('#game').innerHTML = html;
        }
    
     //RESET VARIABLES TO ORIGINAL VALUES WHEN CONDITIONS ARE MET 
        if (guessesLeft === 0) {
            wins = 0;
            losses = 0;
            guessesLeft = 10;

     //PRINTS RESET VALUES TO #game <div>
            var pageReset = "<p>wins: " + wins + "</p>" +
                "<p> losses: " + losses + "</p>" +
                "<p> guesses left: " + guessesLeft + "</p>";             

            document.querySelector('#game').innerHTML = pageReset;
        }

    });
