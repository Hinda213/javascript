// Array of motivational messages
const messages = [
  "Keep going, you are doing great! 💪",
  "Believe in yourself! 🌟",
  "Every day is a fresh start. 🌞",
  "Stay positive, work hard, make it happen. 🚀",
  "Don’t stop until you’re proud. 🎯",
];

// Function to get a random message
 function getRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

function multiply(x , y){
  return x * y
}

export {getRandomMessage , multiply};