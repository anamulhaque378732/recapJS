const user = {
  name: "Anamul",
  age: 25,
  address: {
    city: "Bogura",
    area: "Sador",
    zipCode: 6000,
  },
};
// console.log(user.address.zipCode);
// console.log(user["address"]["zipCode"]);

let entry = Object.entries(user);
let key = Object.keys(user);

// console.log(entry[2][1].area);
// console.log(key[1]);
let students = [
  {
    name: "Anamul",
    id: 102,
  },
  {
    name: "bokachoda",
    id: 130,
  },
  {
    name: "moyzzem",
    id: 150,
  },
  {
    name: "rai",
    id: 543,
    address: {
      area: "Badda",
      thana: "vatara",
      lane: "embace",
      option: [1, 2, 5, 4, 5, 6, 4, 5],
    },
  },
];

console.log(students[3].address.option[2]);
