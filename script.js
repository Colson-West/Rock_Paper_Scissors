let humanScore = 0;
let computerScore = 0;
while (humanScore < 5 && computerScore < 5) {
    let rndInt = Math.floor(Math.random() * 3) + 1;
    let compChoice;
    if (rndInt === 1) {
        compChoice = "rock";
    } else if (rndInt === 2) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }

    let userInput = prompt("Rock, Paper, or Scissors?");
    if (!userInput) break;
    if (!["Rock", "Paper", "Scissors"].includes(userInput)) {
        alert("Sorry, that input is not valid")
        console.log("Sorry, that input is not valid");
        continue;
    }
    alert(`You chose: ${userInput}`);
    console.log(`You chose: ${userInput}`);
    alert(`Computer chose: ${compChoice}`);
    console.log(`Computer chose: ${compChoice}`);

    if (compChoice === userInput) {
        alert("It's a tie");
        console.log("It's a tie");
    } else if (
        (userInput === "Rock" && compChoice === "scissors") ||
        (userInput === "Paper" && compChoice === "rock") ||
        (userInput === "Scissors" && compChoice === "paper")
    ) {
        humanScore++;
        alert("You win this round!");
        console.log("You win this round!");
    } else {
        computerScore++;
        alert("Computer wins this round.");
        console.log("Computer wins this round.");
    }

    alert(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

if (humanScore === 5) {
    alert("Congratulations! You won the game!");
    console.log("Congratulations! You won the game!");
} else if (computerScore === 5) {
    alert("Game over. The computer won.");
    console.log("Game over. The computer won.");
}
