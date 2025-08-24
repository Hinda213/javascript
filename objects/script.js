



let person = {
  name: "John",
  age: 30, 
  isMarried: true,
  occupation: "Developer",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};
person.name = "Hinda";
console.log(person.occupation);
console.log(person["occupation"]);
