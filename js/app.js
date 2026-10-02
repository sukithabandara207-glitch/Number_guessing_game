let randomNumber = Math.floor(Math.random() * 10) + 1;
let chances = 5;
let attempts = 0;

let guessInput = document.getElementById("guessInput");
let chancesDisplay = document.getElementById("chances");
let attemptsDisplay = document.getElementById("attempts");
let guessBtn = document.getElementById("guessBtn");
let restartBtn = document.getElementById("restartBtn");

function btnCheckGuessOnAction() {

    let guess = Number(guessInput.value);

    // Empty input check
    if (guessInput.value == "") {

        Swal.fire({
            icon: "warning",
            title: "Invalid Input",
            text: "Please enter a number between 1 and 10!",
        });

    } 
    // Out of range check
    else if (guess < 1 || guess > 10) {

        Swal.fire({
            icon: "error",
            title: "Wrong Number",
            text: "Please enter a number between 1 and 10!",
        });

    } 
    // Main Game Logic
    else {

        attempts++;
        chances--;

        attemptsDisplay.innerHTML = attempts;
        chancesDisplay.innerHTML = chances;

        // Correct Answer
        if (guess == randomNumber) {

            Swal.fire({
                icon: "success",
                title: "Done! You Won 🎉",
                text: "Awesome! The correct number was " + randomNumber,
            });

            endGame();

        } 
        // Game Over 
        else if (chances == 0) {

            Swal.fire({
                icon: "error",
                title: "Game Over 💥",
                text: "No chances left! The correct number was " + randomNumber,
            });

            endGame();

        } 
        // Too High
        else if (guess > randomNumber) {

            Swal.fire({
                icon: "info",
                title: "Too High! 📉",
                text: "Too high, try a lower number!",
            });

        } 
        // Too Low
        else {

            Swal.fire({
                icon: "info",
                title: "Too Low! 📈",
                text: "Too low, try a higher number!",
            });

        }

        guessInput.value = "";
    }
}

// Game Disabled 
function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
    restartBtn.style.display = "block";
}

// Restart Game Action
function btnRestartGameOnAction() {

    randomNumber = Math.floor(Math.random() * 10) + 1;
    chances = 5;
    attempts = 0;

    chancesDisplay.innerHTML = chances;
    attemptsDisplay.innerHTML = attempts;

    guessInput.disabled = false;
    guessBtn.disabled = false;
    guessInput.value = "";

    restartBtn.style.display = "none";
}