// Scoring
let userScore = 0;
let computerScore = 0;
let wins = 0;
let losses = 0;
let ties = 0;

// Pop-up
document.getElementById("close-pop-up").onclick = () => {
    document.getElementById("pop-up").style.display = "none";
};

// Let computer show emojis from the string given
function toEmoji(choice){
    return{
        rock: "🪨",
        paper:"📄",
        scissors: "✂️"
    }[choice];
}



// Function to play game 
function play (UserChoice){
    //computer chooses from choices given
    const choices = ["rock","paper","scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Who won, computer or user?
    let outcome = "";
    if (UserChoice === computerChoice){
        outcome = "It's a tie"; ties++;
    } else if (
        (UserChoice === "rock" && computerChoice === "scissors")||
        (UserChoice === "paper" && computerChoice === "rock")||
        (UserChoice === "scissors" && computerChoice === "paper")
        ){
            outcome = "You beat the computer!"; wins++;
        } else {
            outcome = "The computer beat you"; losses++;
        }

        // Show results
        document.getElementById("result").textContent = outcome;

        // Show what was choosen  
        document.getElementById("choices").textContent = `You chose ${toEmoji(UserChoice)}. Computer chose ${toEmoji(computerChoice)}.`;

        // Show emoji in computer choice card 
        document.getElementById("computer-card").textContent = toEmoji(computerChoice);

        // Update scoreboard numbers
        document.getElementById("wins").textContent = wins ;
        document.getElementById("losses").textContent = losses ;
        document.getElementById("ties").textContent = ties ;

        // Print
        console.log(outcome);
}

//reset
function resetGame (){
    wins= 0;
    losses= 0;
    ties= 0;

    document.getElementById("wins").textContent = 0;
    document.getElementById("losses").textContent = 0;
    document.getElementById("ties").textContent = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("choices").textContent = "";
    document.getElementById("computer-card").textContent = "Thinking...";
}

// reset button

    document.getElementById("reset-btn").onclick =resetGame;
