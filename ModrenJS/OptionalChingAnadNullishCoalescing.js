let user1 = {
  name: "Anamul",
  address: {
    city: "Dhaka",
  },
};

let user2 = {
  name: "Anamul",
};

console.log(user1.address.city);

// best practices

console.log(user2?.address?.city);

console.log(user2?.address?.city ?? "Bogura");
