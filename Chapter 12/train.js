// Set initial speed of the train in milliseconds (lower is faster)
var trainSpeed = 250;

// Set the initial position of the train on the screen (in pixels)
var trainPosition = 0;

// This will store the animation interval ID so we can control the animation
var animation;

// Get the train element from the HTML
var train = document.getElementById("train");

// Add a click event listener to the train to speed it up when clicked
train.addEventListener("click", speedUp);

// Get the stop button element from the HTML
var stopButton = document.getElementById("stopButton");

// Add a click event listener to the stop button to stop the train when clicked
stopButton.addEventListener("click", stopTrain);

// Function to increase the train's speed (by reducing the interval delay)
function speedUp() {
  // Decrease the interval delay if it's above a minimum threshold
  if (trainSpeed > 10) {
    trainSpeed -= 10;
  }

  // Log current speed for debugging
  console.log("train speed: " + trainSpeed);

  // Clear any existing animation so we can restart it with the new speed
  clearInterval(animation);

  // Start the animation with the new speed
  animation = setInterval(frame, trainSpeed);

  // Function to move the train and check for a crash
  function frame() {
    // Move the train 2 pixels to the right
    trainPosition += 2;

    // Update the train's position in the browser
    train.style.left = trainPosition + "px";

    // Log the current position for debugging
    console.log(trainPosition);

    // Check if the train has reached the crash point
    checkPosition(trainPosition);
  }
}

// Function to check if the train has crashed
function checkPosition(currentPosition) {
  // If the train reaches position 260, it's a crash
  if (currentPosition === 260) {
    alert("CRASH!"); // Show an alert box
    console.log("Crash!"); // Log crash event
    clearInterval(animation); // Stop the animation
  }
}

// Function to stop the train manually using the stop button
function stopTrain() {
  // Only stop if the train hasn't crashed yet
  if (trainPosition < 260) {
    clearInterval(animation); // Stop the animation
  }
}
