//selects a button with the ID "replaceButton" from the HTML.
var replaceButton = document.getElementById("replaceButton");
//When the button is clicked, it runs the replaceIt() function.
replaceButton.addEventListener('click', replaceIt);
// Define the function that generates and displays the story using user inputs from form fields.
function replaceIt() {
  // Get the element where the story will be displayed
  var storyDiv = document.getElementById("story");
  //document.getElementById('adj1').value gets what the user typed in the input fields and wrap them in a span for styling

  //This is repeated for other fields: verbs, rooms, nouns, etc.
  var adj1 =
    "<span class='replacement'>" +
    document.getElementById("adj1").value +
    "</span>";
  var verbING =
    "<span class='replacement'>" +
    document.getElementById("verbIng").value +
    "</span>";
  var roomInHouse =
    "<span class='replacement'>" +
    document.getElementById("roomInHouse").value +
    "</span>";
  var color =
    "<span class='replacement'>" +
    document.getElementById("color").value +
    "</span>";
  var nounPlural =
    "<span class='replacement'>" +
    document.getElementById("nounPlural").value +
    "</span>";
  var pastVerb =
    "<span class='replacement'>" +
    document.getElementById("pastVerb").value +
    "</span>";
  var beverage =
    "<span class='replacement'>" +
    document.getElementById("beverage").value +
    "</span>";
  var musicType =
    "<span class='replacement'>" +
    document.getElementById("musicType").value +
    "</span>";
  var diffRoom =
    "<span class='replacement'>" +
    document.getElementById("diffRoom").value +
    "</span>";
  var exclamation =
    "<span class='replacement'>" +
    document.getElementById("exclamation").value +
    "</span>";
  var pastVerb2 =
    "<span class='replacement'>" +
    document.getElementById("pastVerb2").value +
    "</span>";
  var adjDance =
    "<span class='replacement'>" +
    document.getElementById("adjDance").value +
    "</span>";
  var animal =
    "<span class='replacement'>" +
    document.getElementById("animal").value +
    "</span>";
  var city =
    "<span class='replacement'>" +
    document.getElementById("city").value +
    "</span>";
  var verb =
    "<span class='replacement'>" +
    document.getElementById("verb").value +
    "</span>";
  // Constructs the story with a title and builds the story using the user inputs.
  var theStory = "<h1>Douglas's Dance Party</h1> ";
  theStory += "One " + adj1 + " day, ";
  theStory += "Douglas was " + verbING;
  theStory += " in his " + roomInHouse;
  theStory +=
    ", reading a book about " + color + " " + nounPlural + ".<br></br>";
  theStory += " As he " + pastVerb + " his " + beverage + ", ";
  theStory += "he heard " + musicType + " music ";
  theStory += "playing in the " + diffRoom + ".<br></br> ";
  theStory += exclamation + "! he exclaimed, ";
  theStory += "as he " + pastVerb2 + " down the stairs to join the ";
  theStory += adjDance + " party.<br></br>";
  theStory += "Douglas danced the " + animal + " Dance, ";
  theStory += "the " + city + " Twist, ";
  theStory += "and took the prize for dancing the best Electric " + verb + ".";
  // Insert the final story into the HTML page which is displayed on the browser
  storyDiv.innerHTML = theStory;
}