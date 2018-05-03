function longestWordLength(str) {
  let longestLength = 0;
  let strArray = str.split(" ");

  // for (let i = 0; i < strArray.length; i++) {

  strArray.forEach(word => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  // }

  return longestLength;
}

console.log(longestWordLength("I am a coding god"));
console.log(longestWordLength("I would like to work for Google"));
console.log(longestWordLength("Ain't no fun if the hmoe don't code none"));

function longestWordLength2(str) {
  let longestLength = 0;

  let strArray = str.split(" ").sort((word1, word2) => {
    return word1.length < word2.length;
  });

  return strArray;
}

console.log(longestWordLength2("I am a coding god"));
console.log(longestWordLength2("I would like to work for Google"));
console.log(longestWordLength2("Ain't no fun if the hmoe don't code none"));
