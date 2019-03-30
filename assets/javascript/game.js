var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correct = letters[Math.floor(Math.random()* 26)];
var lives = 10;
var win = 0;
var lose = 0;
var guess = [];

document.onkeyup = function(event) {
    console.log(event.key);
    if (guess.includes(event.key) == false){
        guess.push(event.key);
    document.getElementById("guessed").innerHTML = "Guessed: " + guess.join(" ");
    if(correct.includes(event.key)){
        win++;
        document.getElementById("wins").innerHTML = "Wins: " + win;
        guess = [];
        document.getElementById("guessed").innerHTML = "Guessed:";
        correct = letters[Math.floor(Math.random()* 26)];
        lives = 10;
        document.getElementById("chance").innerHTML = "Chances left: " + lives;
    } else if(lives > 1){
        lives--;
        document.getElementById("chance").innerHTML = "Chances left: " + lives;
    } else {
        lose++
        document.getElementById("losses").innerHTML = "Losses: " + lose;
        guess = [];
        document.getElementById("guessed").innerHTML = "Guessed:";
        correct = letters[Math.floor(Math.random()* 26)];
        lives = 10;
        document.getElementById("chance").innerHTML = "Chances left: " + lives;
    };
}};