// Select elements
const countrySelect = document.getElementById("countrySelect");
const result = document.getElementById("result").querySelector("span");

// Add onchange event listener
countrySelect.addEventListener("change", function () {
  if (countrySelect.value) {
    result.textContent = countrySelect.value;
  } else {
    result.textContent = "None";
  }
});
