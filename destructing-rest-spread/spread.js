//  {
//     firstName: "Ahmed"
//     age: 40
// }

// [
//     "Banana" ,
//     "Apple",

// ]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let merged = [...arr1, ...arr2];
// console.log(merged); // [1, 2, 3, 4, 5, 6]

// let nums = [10, 20, 30];
// let copy = [...nums];

// console.log(nums);
// console.log(copy);

// let user = { name: "Hinda", age: 25 };
// let details = { country: "Somalia" };

// let profile = { ...user, ...details };
// console.log(profile);
// // { name: 'Hinda', age: 25, country: 'Somalia' }

function multiply(x, y) {
  return x * y;
}
let numbers = [3 , 5]
let result = multiply(...numbers);
console.log(result);