// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 5) {
//   console.log(` count ${i}`);
// }

const numbers = [1, 2, 44, 45, 55, 6, 7, 7, 9];

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
// }

// console.log(total);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] ** 2);
// }

// let i = 0;

// while (i < numbers.length) {
//   console.log(numbers[i] ** numbers[i]);
//   i++;
// }

// for of loop

// for ( let number of numbers) {
//   console.log(number);
// }

// for in loop

// const users = {
//   name: "anamul",
//   age: "25",
//   value: 32,
// };

// for (let user in users) {
//   console.log(user);
//   console.log(user, "-->", users[user]);
// }

let marks = 50;

for (let i = 0; i < 100; i += 5) {
  if (i === marks) {
    break;
  }

  console.log(i);
}
for (let i = 0; i < 100; i += 5) {
  if (i === marks) {
    continue;
  }

  console.log(i);
}
