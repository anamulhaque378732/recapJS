function add(...numbers) {
  let total = 0;
  for (let nums of numbers) {
    total += nums;
  }
  //   console.log(total);
}
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// object

const obj = {
  name: "Tonmoy",
  age: 27,
  address: "Dhaka",
  occupation: "Developer",
};

const { name, ...remaining } = obj;

// console.log(name, remaining);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, , , , ...b] = arr;
// console.log(a, b);
