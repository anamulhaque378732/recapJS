// foreach, map

let fruits = ["Apple", "banana", "mango", "JackFruits"];

let newFruits = fruits.forEach((fruit, ids) => {
  //   console.log(`${ids + 1} --> ${fruit}`);
  return `${ids + 1} --> ${fruit}`;
});
// console.log(newFruits); // for each can not return

let newArr = fruits.map((fruit) => fruit.toUpperCase());

// console.log(newArr);

// filter

let customFruits = fruits.filter((f) => f.length > 5);

// console.log(customFruits);

// find

let customFruit = fruits.find((f) => f.length > 5);

// console.log(customFruit);

// includes

let include = fruits.includes("Mango");

// console.log(include);

// some

let student = [
  {
    name: "Anamul",
    marks: 25,
  },
  {
    name: "Raihan",
    marks: 36,
  },
  {
    name: "namul",
    marks: 26,
  },
];

let studentCheck = student.some((s) => s.marks > 40);

// console.log(studentCheck);

let every = student.every((s) => s.marks > 20);

// console.log(every);

// reduce

let products = [
  { title: "mouse", price: 500, inStock: true },
  { title: "keyboard", price: 1000, inStock: false },
  { title: "Monitor", price: 10000, inStock: true },
  { title: "HeadPhone", price: 2000, inStock: true },
];

let total = products.reduce((acc, current) => {
  return (acc += current.price);
}, 0);

// console.log(total);

// sort

let sorted = products.sort((a, b) => a.price - b.price);
let sorted2 = products.sort((a, b) => b.price - a.price);

// console.log(sorted, sorted2);

let estPrice = products
  .filter((p) => p.inStock == true)
  .reduce((acc, current) => {
    return (acc += current.price);
  }, 0);

// console.log(estPrice);
