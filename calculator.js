const simpleCalc = (num1, num2, operator) => {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "Please enter valid number";
  }

  return result;
};

module.exports = simpleCalc;
