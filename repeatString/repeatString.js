function repeatString(str, num) {
  return str.repeat(num); // es2015
  // let repeatedString = '';

  // while ( num > 0 ) {
  //   repeatedString += str; num--;
  // }

  // return repeatedString;
}

console.log(repeatString("codinggod", 2));
console.log(repeatString("google", 3));
