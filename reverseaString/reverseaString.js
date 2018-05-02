function reverseString(word) {
  let reversedWord = word
    .split("")
    .reverse()
    .join("");

  return reversedWord;
}

console.log(reverseString("codegod"));
console.log(reverseString("javascript"));

function reverseString2(word) {
  let reversedWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }

  return reversedWord;
}

console.log(reverseString2("codegod"));
console.log(reverseString2("javascript"));
