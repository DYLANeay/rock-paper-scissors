let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("What are you choosing? [rock, paper, scissors]");
        if (!choice) {
            alert("Please provide an input!");
        }
        if (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors") {
            alert("Please choose a valid value! [rock, paper, scissors]");
        }
    } while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw! Nobody gets a point.");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore += 1;
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
    }
}

function playGame() {
    const rounds = parseInt(prompt("How many rounds would you like to play?"), 10);
    if (isNaN(rounds) || rounds <= 0) {
        console.log("Invalid number of rounds. Exiting the game.");
        return;
    }
    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Scores:\nHuman: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();
