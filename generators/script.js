// function listNames() {
//   console.log("Amran");
//   console.log("Amina");
//   console.log("Ahado");
//   console.log("Khadra");
// }

// listNames();

function* listNames() {
  yield "Amran"
  yield "Amina"
  yield "Ahado"
  yield "Khadra"
}

let gen = listNames();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());