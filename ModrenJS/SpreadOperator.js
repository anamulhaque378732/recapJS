let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [...arr, 12, 5, 4, 6, 9, 8, 7];
// console.log(arr2,arr);

const obj = {
  fruits: "apple",
  meat: "Mutton",
};

const newObj = { ...obj, Fish: "rui" };
// console.log(newObj, obj);

const personalInfo = {
  name: "namu",
  age: 25,
};

const contactInfo = {
  email: "anamu@mul.com",
  phoneNumber: 1464,
};

const profile = { ...personalInfo, ...contactInfo, zip: 5850 };
console.log(profile);
