const weight = process.argv[2];
const height = process.argv[3];

function calculateBmi(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

const calculateBm = calculateBmi(weight, height);

if (calculateBm < 18.5) {
  console.log("underweight");
} else if (calculateBm >= 18.5 && calculateBm <= 24.9) {
  console.log("Normal weight");
} else if (calculateBm >= 25.0 && calculateBm <= 29.9) {
  console.log("overweight");
} else {
  console.log("obesity");
}

switch (true) {
  case calculateBm < 18.5:
    console.log("underweight");
    break;
  case calculateBm >= 18.5 && calculateBm <= 24.9:
    console.log("Normal weight");
    break;

  case calculateBm >= 25.0 && calculateBm <= 29.9:
    console.log("overweight");
    break;
  default:
    console.log("obesity");
}
