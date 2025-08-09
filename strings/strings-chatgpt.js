let adress = "123 Main St";

console.log(adress.charAt(4));
console.log(adress.toUpperCase())
console.log(adress.toLocaleLowerCase())
console.log(adress.concat(",Haahey"))
console.log(adress.length)
console.log(adress.indexOf("S"))
console.log(adress.replace("Main" ,"High"));

// let adress = "123 Main St";

// // Convert to lowercase
// console.log(adress.toLowerCase());       // "123 main st"

// // Convert to uppercase
// console.log(adress.toUpperCase());       // "123 MAIN ST"

// // Get character at specific index
// console.log(adress.charAt(9));           // "n"

// // Concatenate another string
// console.log(adress.concat(", London"));  // "123 Main St, London"

// // Check if string ends with specific substring
// console.log(adress.endsWith("St"));      // false (case-sensitive)
// console.log(adress.toLowerCase().endsWith("st"));  // true

// // Check if string contains substring
// console.log(adress.includes("123"));     // true

// // Find index of first occurrence
// console.log(adress.indexOf("M"));        // 4

// // Length of the string
// console.log(adress.length);              // 11

// // Replace part of the string
// console.log(adress.replace("Main", "High"));  // "123 High St"

// // Extract part of the string (slice)
// console.log(adress.slice(4, 8));         // "Main"

// // Trim whitespace from both sides
// let messy = "   456 Side St   ";
// console.log(messy.trim());               // "456 Side St"

// // Split string into array
// console.log(adress.split(" "));          // ["123", "Main", "St"]

// // Repeat the string
// console.log(adress.repeat(2));           // "123 Main St123 Main St"

// // Pad the string at the start or end
// console.log(adress.padStart(15, "*"));   // "**123 Main St"
// console.log(adress.padEnd(15, "-"));     // "123 Main St----"

// // Convert to string explicitly (already a string, but just for example)
// console.log(String(adress));             // "123 Main St"

// // Attempting to change length (won't work for strings — strings are immutable)
// adress.length = 5;
// console.log(adress);                     // "123 Main St" (unchanged)

// // Access using bracket notation
// console.log(adress[4]);                  // "M"
