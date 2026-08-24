function isValidPrice(price) {
  return typeof price === "number" && price > 0;
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function discountCalculate(price, discountPercent) {
  if (!isValidPrice(price)) {
    return 0;
  }

  let discountAmount = (price * discountPercent) / 100;

  return price - discountAmount;
}

function calculateFinalBil(price, vatPercentage = 15) {
  let vat = (price * vatPercentage) / 100;
  return price + vat;
}

function forBDT(amount) {
  return `${amount.toFixed(2)} BDT`;
}

function capitalized(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function processOrder(user, itemPrice, discountCode) {
  console.log(`--- processing order for ${capitalized(user.name)}--- `);

  if (!isValidEmail(user.email)) {
    console.log("invalid user email");
    return;
  }
  let currentPrice = itemPrice;

  if (discountCode == "NLB") {
    currentPrice = discountCalculate(itemPrice, 20);
    console.log("20% discount applied");
  }

  let totalBill = calculateFinalBil(currentPrice);
  console.log("final amount to pay", forBDT(totalBill));
  console.log("order completed");
}

let user1 = {
  name: "anamul",
  email: "ana@mul.com",
};
let user2 = {
  name: "anamul",
  email: "ana@mul.com",
};

processOrder(user1, 2000, "NLB");
processOrder(user2, 3000, "NLB");
