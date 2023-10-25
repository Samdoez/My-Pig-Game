// js code for the Pig Game my journey to add functionality to the game
//alert("Game Rules: Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to \"hold\": If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues.");
//alert("The first player that gets to 100 is the winner");

var currentScore, globalScore, activePlayer, gamePlaying, holder; // global variables
initializevalues();

    document.querySelector(".btn-roll").addEventListener("click", function(){
        document.querySelector(".report-div").style.display = "none";
        if (gamePlaying){ // this is checking if the rolling of dice should continue, if false dont work, if true u can roll d dice
            var dice, diceDisplay;
            dice = Math.floor( (Math.random() * 6) + 1 ) ; // generating a random value and round down
        
            diceDisplay = document.querySelector(".dice"); //assigning d picker of the class
            diceDisplay.style.display = "block"; // to display the dice again
            diceDisplay.src="dice-" + dice + ".png"; //to determine the number of dice chosen as an image
        
                if (dice === 6 && holder === 6){
                    globalScore[activePlayer] = 0;
                    document.getElementById("global-score-" + activePlayer).textContent = 0;
                    currentScore = 0;
                    document.getElementById("current-score-" + activePlayer).textContent = 0;
                    toggleplayer();
                }
                 if (dice !== 1){
                    //activePlayer = 0;
                    
                    currentScore += dice; // storing d value
                    document.getElementById("current-score-" + activePlayer).textContent = currentScore; // to display the updated current score
                }
                else{
                   
                    toggleplayer();

                }
                holder = dice;
            }
    });

document.querySelector(".btn-hold").addEventListener("click", function(){
    if (gamePlaying){
        // hold or add this score to the global of the activeplayer
        globalScore[activePlayer] += currentScore;

        //upload the value to the User Interface
        document.getElementById("global-score-" + activePlayer).textContent = globalScore[activePlayer];

        // check for a winner
        if (globalScore[activePlayer] >= 10) {
            document.querySelector("#player-name-" + activePlayer ).textContent = "🎇Winner!🎇";
            document.querySelector(".dice").style.display = "none";
            document.getElementById("player-name-"+ activePlayer).classList.add("winner");
            document.getElementById("playercont-"+ activePlayer).classList.remove("active-player");
            gamePlaying = false;
        }
        else {
            toggleplayer();
        }
    } 

});

//there is a callback function in our ".addEventListener"method which is: initializevalues
document.querySelector(".btn-newgame").addEventListener("click", initializevalues);

// function to intialize the variables needed to store and maninpulate our scores
function initializevalues(){

    globalScore = [0,0];
    currentScore = 0;
    activePlayer = 0;
    holder = 0;
    gamePlaying = true;

    //console.log(dice);
    document.querySelector(".dice").style.display = "none"; // to hide the dice

    document.getElementById("global-score-0").textContent = 0; // to reset all the values to  0
    document.getElementById("current-score-0").textContent = 0; // to reset all the values to  0
    document.getElementById("global-score-1").textContent = 0; // to reset all the values to  0
    document.getElementById("current-score-1").textContent = 0; // to reset all the values to  0

    document.getElementById("player-name-0").textContent = "Player 1";
    document.getElementById("player-name-1").textContent = "Player 2";

    document.getElementById("player-name-0").classList.remove("winner");
    document.getElementById("player-name-1").classList.remove("winner");

    document.getElementById("playercont-0").classList.add("active-player");

}

// bcoz JS can do hoisting on function declaration so i can declare/create the function
// after i have called d function up
function toggleplayer(){
         
           // document.querySelector("#report").style.diplay = block;
            document.getElementById("current-score-" + activePlayer).textContent = 0; // cause current player to lose all his scores
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  // next you change the current player to the opponet using a ternary operator
            currentScore = 0; //reset the current score to 0

            document.getElementById("playercont-0").classList.toggle("active-player"); //to change the active player
            document.getElementById("playercont-1").classList.toggle("active-player");
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".report-div").style.display = "block"; // to hide d dice again
            //alert("oops you rolled a 1"); i was using this to tell the user that u rolled a one
}


