// Warehouse lady gets the box (sometimes fails)
function getBox(order) {
  return new Promise((resolve, reject) => {
    console.log(`Warehouse lady is getting box for ${order}...`);

    setTimeout(() => {
      let success = Math.random() > 0.3; // 70% chance success, 30% fail
      if (success) {
        resolve(`✅ Box for ${order}`);
      } else {
        reject(`❌ Sorry, box for ${order} is out of stock!`);
      }
    }, 2000);
  });
}

// Counter lady serves a person
function servePerson(person) {
  console.log(`Counter lady takes order from ${person}.`);

  return getBox(person)
    .then((box) => {
      console.log(`Counter lady gives ${box} to ${person}.`);
    })
    .catch((error) => {
      console.log(`Counter lady tells ${person}: ${error}`);
    });
}

// Queue of people
let queue = ["Alice", "Bob", "Charlie"];

// Serve them one by one using chaining
servePerson(queue[0])
  .then(() => servePerson(queue[1]))
  .then(() => servePerson(queue[2]))
  .then(() => {
    console.log("🎉 All people have been served (or informed).");
  });
