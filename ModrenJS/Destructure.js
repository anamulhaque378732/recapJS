// destructuring

const student = {
  name1: "Anamul",
  age: 20,
  address: "Bogura",
};
// const student2 = {
//   name: "Anamul",
//   age: 20,
//   address: {
//     city: "Bogura",
//     state: "12/1",
//     zip: 5055,
//   },
// };

const { name1, address, age } = student;
// console.log(name1);
// const {
//   name,
//   address: { city, zip },
// } = student2;

// console.log(city, name);

const arr = ["red", "White", "Black"];

const [first, Second, Third] = arr;

// console.log(first, Second, Third);

const student2 = {
  name: "Anamul",
  age: 20,
  address: {
    city: "Bogura",
    state: "12/1",
    zip: 5055,
  },
  hobbies: ["Painting", "programming"],
};

const {
  name,
  address: { city },
  hobbies: [firstHobbies],
} = student2;
// console.log(firstHobbies);
