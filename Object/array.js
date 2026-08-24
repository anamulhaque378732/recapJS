let marks = [4, 55, 66, 44, 22, 3, 12, 33, 98, 98, 45, 999, 1000, 45, 68];

let max = marks[0];

// for (let i = 1; i < marks.length; i++) {
//   if (max < marks[i]) {
//     max = marks[i];
//   }
// }
// console.log(max);
let sum = 0;

// for (let mark of marks) {
//   sum += mark;
// }
// console.log(sum);

// console.log(sum/marks.length);

let remarks = [];
for (let i = marks.length - 1; i >= 0; i--) {
  remarks.push(marks[i]);
}

console.log(remarks);

const total = marks.reduce((a, b) => a + b, 0);

console.log(total, total2);
