// Attach a click event listener to the "submit" button
// When clicked, the calculateIt() function will be executed

document.getElementById("submit").addEventListener("click", calculateIt);

// Main function to perform the selected operation
function calculateIt() {
  // Declare variables to store the selected operator and the result
  var myOperator;
  var returnValue;

  // Get user inputs (always retrieved as strings from input fields)
  var operand1 = document.getElementById("operand1").value;
  var operand2 = document.getElementById("operand2").value;

  // Get the selected data types for operand1 and operand2 from dropdowns
  var select1 = document.getElementById("operand1-type");
  var select2 = document.getElementById("operand2-type");
  // Retrieve the selected data types for operand1 and operand2
  var operand1type = select1.value;
  var operand2type = select2.value;

  // Get the radio button elements for selecting an operator

  var radios = document.getElementsByName("operator");

  // Convert operand1 and operand2 to the specified types based on user selection(string or number)
  switch (operand1type) {
    case "string":
      operand1 = String(operand1); // Convert to string
      break;
    case "number":
      operand1 = Number(operand1); // Convert to number
      break;
  }

  // Convert operand1 and operand2 to the specified types based on user selection(string or number)
  switch (operand2type) {
    case "string":
      operand2 = String(operand2); // Convert to string
      break;
    case "number":
      operand2 = Number(operand2); // Convert to number
      break;
  }

  // If operand1 is "3.14" and operand1type is "number", operand1 becomes 3.14.
  // If operand1 is "abc" and operand1type is "number", operand1 becomes NaN.

  //loop through each possible operand value and find the checked one
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      //Tests if the current radio button (radios[i]) is selected.
      myOperator = radios[i].value; //If selected, assigns its value to the myOperator variable.

      //do a different operation depending on which operator was selected
      switch (radios[i].value) {
        case "+":
          returnValue = operand1 + operand2;
          break;
        case "-":
          returnValue = operand1 - operand2;
          break;
        case "*":
          returnValue = operand1 * operand2;
          break;
        case "/":
          returnValue = operand1 / operand2;
          break;
        case "%":
          returnValue = operand1 % operand2;
          break;
        case "concat":
          returnValue = operand1 + " " + operand2;
          myOperator = "+";
          break;
        case "==":
          returnValue = operand1 == operand2;
          break;
        case "===":
          returnValue = operand1 === operand2;
          break;
        case "!=":
          returnValue = operand1 != operand2;
          break;
        case "!==":
          returnValue = operand1 !== operand2;
          break;
        case ">":
          returnValue = operand1 > operand2;
          break;
        case ">=":
          returnValue = operand1 >= operand2;
          break;
        case "<":
          returnValue = operand1 < operand2;
          break;
        case "<=":
          returnValue = operand1 <= operand2;
          break;
      }

      break; // Stop the loop once the selected operator is found
    }
  }

  //display the operation
  if (typeof operand1 === "string") {
    operand1 = '"' +  operand1 + '"';
  }
  if (typeof operand2 === "string") {
    operand2 = '"' + operand2 + '"';
  }
  //This combines operand1, myOperator, and operand2 into a single string.
  // Display the full operation
  document.getElementById("final-operation").innerHTML =
    operand1 + myOperator + operand2;

  //display the return value
  document.getElementById("result").innerHTML = returnValue;
}

// NB! line 106 is a string containing a single double quote ("). In JavaScript, to include a double quote in a string, you have to surround it with single quotes or escape it.
