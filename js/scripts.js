function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}

function remainder(number1, number2){
  return number1 % number2;
}

function convertC(number1){
  return number1 * 1.8 + 32;
}

function convertF(number1){
  return (number1 - 32) * 0.5556;
}

const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));

// alert(add(number1, number2));
// alert(convertF(number1));
alert(convertF(number1));