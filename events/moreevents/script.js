// MOUSE EVENTS
const mouseBtn = document.getElementById("mouseBtn");
const mouseResult = document.getElementById("mouseResult");

mouseBtn.addEventListener("mousedown", () => {
  mouseResult.textContent = "Mouse Down: Button pressed";
});

mouseBtn.addEventListener("mouseup", () => {
  mouseResult.textContent = "Mouse Up: Button released";
});

mouseBtn.addEventListener("click", () => {
  mouseResult.textContent = "Click: Button clicked";
});

mouseBtn.addEventListener("mousemove", () => {
  mouseResult.textContent = "Mouse Move: Moving over button";
});

mouseBtn.addEventListener("mouseover", () => {
  mouseResult.textContent = "Mouse Over: Entered button area";
});

mouseBtn.addEventListener("mouseout", () => {
  mouseResult.textContent = "Mouse Out: Left button area";
});

// FORM EVENTS
const myForm = document.getElementById("myForm");
const formResult = document.getElementById("formResult");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("focus", () => {
  formResult.textContent = "Focus: Name input selected";
});

nameInput.addEventListener("blur", () => {
  formResult.textContent = "Blur: Name input lost focus";
});

emailInput.addEventListener("invalid", () => {
  formResult.textContent = "Invalid: Please enter a valid email!";
});

myForm.addEventListener("reset", () => {
  formResult.textContent = "Reset: Form cleared";
});

myForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  formResult.textContent = `Submit: Name = ${nameInput.value}, Email = ${emailInput.value}`;
});
