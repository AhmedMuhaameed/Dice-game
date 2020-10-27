var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        //generate random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        //display results
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
        document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
        document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
    
        if (dice1 !== 1 && dice2!=1) {
            //add score
            roundScore += dice1 +dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            //next player
            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying) {
        var inputscore, winningScore;
        //add current score to global score
        scores[activePlayer] += roundScore;

        //update UI
        document.querySelector("#score-" + activePlayer).textContent =scores[activePlayer];
        input = document.querySelector("#gameScore").value;

        //check if player won the game
        if (input > 0) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        if (scores[activePlayer] >= winningScore) {
            gamePlaying = false;
            document.querySelector("#name-" + activePlayer).textContent ="Winner !!";
            document.querySelector("#dice-1").style.display = "none";
            document.querySelector("#dice-1").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        } else {
            //next player
            nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";
}

function init() {
    gamePlaying = true;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("name-0").textContent = "player 1";
    document.getElementById("name-1").textContent = "player 2";
    document.querySelector(".player-0-panel").classList.remove("winnner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
