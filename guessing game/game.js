// Generate a random secret number between 1 and 20
let secret = Math.floor(Math.random() * 20) + 1;

// Declare a variable to store the user's guess
let guess;

// Get a reference to the message display element in the HTML
let messageEl = document.getElementById("message");

// Function to check the user's guess
function checkGuess() {
  // Get the user's input from the input box and convert it to an integer
  guess = parseInt(document.getElementById("guessInput").value);

  // Validate the input: check if it's not a number OR outside the 1–20 range
  if (isNaN(guess) || guess < 1 || guess > 20) {
    // Show error message for invalid input
    messageEl.textContent = "Please enter a number between 1 and 20.";
    return; // Exit the function early
  }

  // Compare the guess with the secret number
  if (guess === secret) {
    // Correct guess: show success message
    messageEl.textContent = "🎉 Congratulations! You guessed correctly";
  }
  else if (guess < secret) {
    // Guess is too low: give a hint to try a higher number
    messageEl.textContent = "Incorrect guess, too low. Try again!";
  }
  else {
    // Guess is too high: give a hint to try a lower number
    messageEl.textContent = "Incorrect guess, too high. Try again!";
  }
}

