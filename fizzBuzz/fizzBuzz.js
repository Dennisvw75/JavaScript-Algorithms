function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  }
  return "";
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(15));
console.log(fizzbuzz(10));
console.log(fizzbuzz(8));

function fizzbuzz2(num) {
  let word = "";

  if (num % 3 === 0) {
    word = word.concat("fizz");
  }

  if (num % 5 === 0) {
    word = word.concat("buzz");
  }

  return word;
}

console.log(fizzbuzz2(3));
console.log(fizzbuzz2(15));
console.log(fizzbuzz2(10));
console.log(fizzbuzz2(8));
