// Arrays for item data
var nums = [1, 2, 3, 4]; // Item numbers
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"]; // Item names
var prices = [7.5, 9.5, 8.5, 7.5]; // Item prices
var quantities = [0, 0, 0, 0]; // Quantity selected by user
var totals = [0.0, 0.0, 0.0, 0.0]; // Total price per item
var totalOrderAmt = 0; // Total order amount (used internally)

// Function to handle "Add" button click
function add_selection(x) {
  quantities[x] += 1; // Increase quantity for item x
  totals[x] = prices[x] * quantities[x]; // Recalculate total for item x
  totalOrderAmt += prices[x]; // Update overall total
  display_all(); // Refresh the display
}

// Function to handle "Remove" button click
function remove_selection(x) {
  if (quantities[x] > 0) {
    // Only remove if quantity is greater than 0
    quantities[x] -= 1; // Decrease quantity
    totals[x] = prices[x] * quantities[x]; // Recalculate total
    totalOrderAmt -= prices[x]; // Update overall total
  }
  display_all(); // Refresh the display
}

// Function to calculate and display the final total
function checkout() {
  let total = 0; // Start from 0
  for (let i = 0; i < totals.length; i++) {
    total += totals[i]; // Sum all item totals
  }

  // Display total in the element with id="totalDisplay"
  document.getElementById("totalDisplay").innerHTML =
    "<p><strong>Total Order Amount: R " + total.toFixed(2) + "</strong></p>";
}

// Function to build and display the shopping cart table
function display_all() {
  // Start building the HTML table
  var myTable =
    "<table><th style='width: 100px; color: white; text-align: right;'>Num</th>";
  myTable +=
    "<th style='width: 100px; color: white; text-align: right;'>Item</th>";
  myTable +=
    "<th style='width: 100px; color: white; text-align: right;'>Price</th>";
  myTable +=
    "<th style='width: 100px; color: white; text-align: right;'>Quantity</th>";
  myTable +=
    "<th style='width: 100px; color: white; text-align: right;'>Total</th>";
  myTable +=
    "<th style='width: 100px; color: white; text-align: right;'>Add</th>";
  myTable +=
    "<th style='width: 100px; color: white; text-align: right;'>Remove</th>";

  // Loop through all items and add a row for each
  for (let i = 0; i < items.length; i++) {
    myTable +=
      "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>R " +
      prices[i].toFixed(2) +
      "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>R " +
      totals[i].toFixed(2) +
      "</td>";

    // Add "Add" and "Remove" buttons with corresponding item index
    myTable +=
      "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
    myTable +=
      "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
  }

  myTable += "</table><br/>";

  // Add Checkout button below the table
  myTable += "<button onclick='checkout()'>Checkout</button>";

  // Display the full table in the "demo" element
  document.getElementById("demo").innerHTML = myTable;
}

// When the page loads, display the cart for the first time
window.onload = function () {
  display_all();
};
