// Import function from messages.js
import { getRandomMessage , multiply } from "./messages.js";

// Select elements
const button = document.getElementById("msgBtn");
const output = document.getElementById("output");

// Add button click event
button.addEventListener("click", () => {
//   const message = getRandomMessage();
const message = multiply(3 , 5);
  output.textContent = message;
});
