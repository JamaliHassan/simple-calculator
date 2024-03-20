#!  /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your first Number", type: "number", name: "firstNumber" },
  { message: "Enter your Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select Operator",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Division",
      "Multiplication",
      "Modulus",
      "Exponentiation",
      ,
      "Percentage",
    ],
  },
]);

console.log(answer);
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operator === "Exponentiation") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else if (answer.operator === "Percentage") {
  console.log((answer.firstNumber / answer.secondNumber) * 100);
} else {
  console.log(
    "Please Select one of The Above Operator to Proceed the Operation"
  );
}
