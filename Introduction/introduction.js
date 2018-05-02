function introduction(firstname, lastname) {
  const introduction = "Hi, my name is ".concat(firstname, " ", lastname, ".");

  return introduction;
}

function introduction2(firstname, lastname) {
  const introduction2 = "Hi, my name is " + firstname + " " + lastname + ".";

  return introduction2;
}

function introduction3(firstname, lastname) {
  const introduction3 = `Hi, my name is ${firstname} ${lastname}.`;

  return introduction3;
}
console.log(introduction3("Dennis", "van Wetering"));
console.log(introduction2("Dennis", "van Wetering"));
console.log(introduction("Dennis", "van Wetering"));
