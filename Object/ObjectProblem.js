const student = {
  name: "Anamul",
  id: 102,
  marks: {
    bangla: 98,
    english: 69,
    math: 96,
  },
};

let totalMarks = 0;
let totalSubject = 0;

// for (let ele in student.marks) {
//   totalMarks += student.marks[ele];

//   totalSubject++;
// }
// console.log(
//   totalMarks,
//   totalSubject,
//   (totalMarks / totalSubject).toFixed(2) > 80 ? "A+" : "others",
// );

let card = [
  { price: 1200, quantity: 2 },
  { price: 1800, quantity: 1 },
  { price: 150, quantity: 3 },
];

let item = 0;
let total = 0;

for (let ele of card) {
  item += ele.quantity;

  total = total + ele.price * ele.quantity;
}
console.log(item, total);
