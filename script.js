let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let attemptsCount = 0; // Initialize the attempts count

// Add event listener to the button
document.getElementById("guessBtn").addEventListener("click", function() {
    const playerInput = document.getElementById("playerInput").value; // Get the player's input
    const playerGuess = Number(playerInput); // Convert the input to a number
    const numberGuessed = document.querySelector(".numberGuessed");
    const result = document.querySelector(".result");
    const playerGuessDisplay = document.querySelector(".playerGuess");
    const attempts = document.querySelector(".attempts");

    // Validate the player's guess
    if (playerGuess < 1 || playerGuess > 100 || isNaN(playerGuess)) {
        result.querySelector("p").textContent = "Please enter a valid number between 1 and 100.";
        return; // Exit the function if the input is invalid
    }

    attemptsCount++; // Increment attempts count
    attempts.querySelector("p").textContent = `Attempts: ${attemptsCount}`; // Update attempts display
    playerGuessDisplay.querySelector("p").textContent = `The number you guessed was: ${playerGuess}`; // Show player's guess

    // Compare the player's guess with the random number
    if (playerGuess < randomNumber) {
        result.querySelector("p").textContent = "Too Low."; // Feedback if too low
    } else if (playerGuess > randomNumber) {
        result.querySelector("p").textContent = "Too High."; // Feedback if too high
    } else {
        result.querySelector("p").textContent = "Congratulations! You've guessed the number!"; // Feedback if correct
    }

    // Clear the input field for the next guess
    document.getElementById("playerInput").value = '';
});
