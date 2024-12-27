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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');

    // Clear previous result
    resultDiv.innerHTML = '';
    scoreDiv.innerHTML = '';

    const resultMessage = document.createElement('p');
    resultDiv.appendChild(resultMessage);
    
    resultMessage.textContent = `Player chose: ${humanChoice}. Computer chose: ${computerChoice}. `;
    const roundOutcome = document.createElement('p');
    if (humanChoice === computerChoice) {
        roundOutcome.textContent = "Draw! Nobody gets a point.";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        roundOutcome.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore += 1;
        roundOutcome.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
    resultDiv.appendChild(roundOutcome);

    const scoreMessage = document.createElement('p');
    scoreMessage.textContent = `Current Scores: Human: ${humanScore} | Computer: ${computerScore}`;
    scoreDiv.appendChild(scoreMessage);
}

const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
document.body.appendChild(buttonContainer);

const resultDiv = document.createElement('div');
resultDiv.id = 'result';
resultDiv.style.marginTop = '20px';
resultDiv.style.fontSize = '18px';
resultDiv.style.fontWeight = 'bold';
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement('div');
scoreDiv.id = 'score';
resultDiv.style.whiteSpace = "pre";
document.body.appendChild(scoreDiv);

const options = ['rock', 'paper', 'scissors'];
options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option.charAt(0).toUpperCase() + option.slice(1);
    button.id = option;
    buttonContainer.appendChild(button);
    button.addEventListener('click', () => playRound(option));
});
