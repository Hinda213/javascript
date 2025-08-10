let student = {
  name: "John",
  age: 20,
  grades: [90, 85, 95],
  score: 90,
};

for (const key in student) {
  console.log(key);
  console.log(student[key]);
}
