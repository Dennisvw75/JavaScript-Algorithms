function isPalindrome(str) {
  let forwardStr = str.toLowerCase().replace(/[\W_]/g, "");
  let reversedStr = forwardStr
    .split("")
    .reverse()
    .join("");

  return forwardStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("My age is 0, 0 sii ega ym."));
console.log(isPalindrome("_codegod"));
console.log(isPalindrome("legendary"));
console.log(isPalindrome(".0_0 (: /- :) 0-0"));
