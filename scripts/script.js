//initialize gameplay variables
let cpuOpponent = new Champion();
const maxRounds = 3;
let started = false;
let opacityVal = 0;
let popUpAnimation;
let rounds = 0;
let playerRoundScore = 0;
let playerTotalScore = 0;
let compRoundScore = 0;
let compTotalScore = 0;
let images = [
    `Dice-1.svg`,
    `Dice-2.svg`,
    `Dice-3.svg`,
    `Dice-4.svg`,
    `Dice-5.svg`,
    `Dice-6.svg`]
//wait a half second before prompting user name input (animate with JS)
setTimeout(function () {
    if(started === false){
        popUpAnimation = requestAnimationFrame( fadeIn );
    }
}, 500);
function fadeIn(){
    opacityVal = opacityVal + .05;
    if(opacityVal <= 1){
        newPlayer.style.opacity = opacityVal;
        requestAnimationFrame( fadeIn );
        return started = true;
    } else {
        newPlayer.style.opacity = 1;
    }
}
//Prompt user to enter name and apply to html 
const $nameInput = $('#name');
const $playerName = $('#player-name');
submit.addEventListener("click", (name) => {
    if($nameInput.val() == ""){
        return
    }else{
        let playerName = $nameInput.val();
        $playerName.html(`${playerName}`)
        newPlayer.style.display = "none";
    }
});
//roll all dice when user clicks Roll dice button
$rollDiceBtn.on("click", (event) => {
    //allow round to complete before detecting new click events
    $rollDiceBtn.prop("disabled", true)
    //animate dice movement to indicate new roll
    if (rounds < maxRounds){
        dice.forEach(function(die){ 
            die.classList.add("shake");
        });
        setTimeout(function(){ 
            dice.forEach(function(die){
                die.classList.remove("shake");
            });
            //instantiate new die showing a random side, update element value attribute with string
            dice.forEach(function(die){
                let i = new Die(6);
                value = i.rollDie();
                die.setAttribute("src", `./images/${images[value]}`);
                die.setAttribute("value", value + 1);
            });
            //update global variable for player's round scores, converting string value attribute to integer
            if (parseInt(playerD1.getAttribute("value")) === 1 || parseInt(playerD2.getAttribute("value")) === 1) {
                playerRoundScore = 0;
                playerRound.style.color = "red";
            } else if (parseInt(playerD1.getAttribute("value")) === parseInt(playerD2.getAttribute("value"))){
                playerRoundScore = 2 * (parseInt(playerD1.getAttribute("value")) + parseInt(playerD2.getAttribute("value")));
                playerRound.style.color = "purple";
            } else {
                playerRoundScore = parseInt(playerD1.getAttribute("value")) + parseInt(playerD2.getAttribute("value"));
                playerRound.style.color = "var(--almost-black)"
            };
            //repeat steps for computer scores, converting string values into integers
            if (parseInt(compD1.getAttribute("value")) === 1 || parseInt(compD2.getAttribute("value")) === 1) {
                compRoundScore = 0;
                compRound.style.color = "red";
            } else if (parseInt(compD1.getAttribute("value")) === parseInt(compD2.getAttribute("value"))){
                compRoundScore = 2 * (parseInt(compD1.getAttribute("value")) + parseInt(compD2.getAttribute("value")));
                compRound.style.color = "purple";
            } else {
                compRoundScore = parseInt(compD1.getAttribute("value")) + parseInt(compD2.getAttribute("value"));
                compRound.style.color = "var(--almost-black)"
            };
            //update total score display for both players
            if (playerTotalScore === 0){
                playerTotal.innerHTML = `Total: ${playerRoundScore}`;
            } else {
                playerTotal.innerHTML = `Total: ${playerTotalScore + playerRoundScore}`;
            };
            if(compTotalScore === 0){
                compTotal.innerHTML = `Total: ${compRoundScore}`;
            } else {
                compTotal.innerHTML = `Total: ${compTotalScore + compRoundScore}`;
            };
            //update round score display
            playerRound.innerHTML = `This Round: ${playerRoundScore}`;
            playerTotalScore += playerRoundScore;
    
            compRound.innerHTML = `This Round: ${compRoundScore}`;
            compTotalScore += compRoundScore;
            
            let marginOfVictory = parseInt(compRoundScore) - parseInt(playerRoundScore);
            cpuOpponent.talkTrash(marginOfVictory);//talkTrash fn

            //move through index after each round
            rounds++;
            //re-enable Roll Dice button after incrementing rounds variable
            $rollDiceBtn.prop("disabled", false);
            //when game is over display results and offer rematch
            if (playerTotalScore === compTotalScore){
                result.style.backgroundColor = "var(--grey-color)"
                greeting.innerHTML  = "Draw."
                message.innerHTML   = `Final score ${playerTotalScore} to ${compTotalScore}. Nice try, pal!`
            } else if (playerTotalScore > compTotalScore){
                result.style.backgroundColor = "gold"
                greeting.innerHTML  = "Beginner's luck!"
                message.innerHTML   = `Final score ${playerTotalScore} to ${compTotalScore}. You won't beat<br>me again!`
            }else{
                result.style.backgroundColor = "var(--dark-background)"
                greeting.innerHTML  = "You lost!"
                message.innerHTML   = `Final score ${compTotalScore} to ${playerTotalScore}.<br>Is that all<br>you've got?`
            };
            //display round information in page header
            if (rounds === maxRounds){
                result.style.display        = "flex";
                result.style.flexDirection  = "column";
                result.style.alignItems     = "center";
                result.style.justifyContent = "space-around";
            }
            pageHeader.innerHTML = `Rolls left: ${maxRounds - rounds}`;
        }, 1250);
    } else {
        //disable Roll Dice button when game ends
        event.preventDefault();    
    }
});
//if user accepts rematch, reinitialize variables and reset html scoreboards
rematch.style.cursor = "pointer";
rematch.addEventListener("click", () => {
    rounds = 0;
    playerRoundScore    = 0;
    playerTotalScore    = 0;
    compRoundScore      = 0;
    compTotalScore      = 0;
    pageHeader.innerHTML    = `Rolls left: ${maxRounds - rounds}`;
    result.style.display    = "none";
    playerRound.innerHTML   = `This Round : 0`
    playerRound.style.color = "var(--almost-black)"
    playerTotal.innerHTML   = `Total: 0`
    compRound.innerHTML     = `This Round: 0`
    compRound.style.color   = "var(--almost-black)"
    compTotal.innerHTML     = `Total: 0`
});

