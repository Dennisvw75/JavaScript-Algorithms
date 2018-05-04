function addTwoDigits(num) {
  // let numArray = num.toString();
  // numArray = numArray.split('');
  // numArray = numArray.reduce((num1, num2) => parseInt(num1) + parseInt(num2));
  return num.toString().split('').reduce((num1, num2) => parseInt(num1) + parseInt(num2));
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(48));