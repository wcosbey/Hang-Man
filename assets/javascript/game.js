var wordList = ["beer","india pale ale","pale ale","plisner","gose","lager", "saison", "stout", "porter", "ale", "kolsch", "marzen", "hefeweizen"];
var chosenWord = "";
var lettersInChosenWord = [];
var wordBlanks = [];
var blanksAndSuccesses = [];
var wrongGuesses = [];
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;


function startGame () {
    numGuesses = 12
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = chosenWord.split("");
    wordBlanks = lettersInChosenWord.length;
    console.log(chosenWord);
    blanksAndSuccesses = [];
    wrongGuesses = [];
    for (var i = 0; i < wordBlanks; i++) {
        blanksAndSuccesses.push("_");
    } 
    console.log(blanksAndSuccesses);
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML =  blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < wordBlanks; i++) {
        if (chosenWord[i] === letter) {


            letterInWord = true;
        }

    }
    if (letterInWord) {
        for (var j = 0; j < wordBlanks; j++) {
            if (chosenWord [j] === letter) {
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    }
    else {
        wrongGuesses.push(letter);
        numGuesses--;
    }


}




function roundComplete() {

    console.log("win-counter: " + winCounter + " | loss-counter: " + lossCounter + " | NumGuesses: " + numGuesses );

    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You WIN!");

        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();
    }
    else if (numGuesses === 0) {
        lossCounter++;
        alert("You LOSE!");

        document.getElementById("loss-counter").innerHTML = lossCounter;
        startGame();
    }
}

startGame();


document.onkeyup = function(event) {
  
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  
  checkLetters(letterGuessed);
  
  roundComplete();
};