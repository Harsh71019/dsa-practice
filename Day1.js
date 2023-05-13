// Date === Sunday 14 May 2023 01:00 am

const word = "harsh";

//Using inbuilt methods
function reverse (string) {
    return string.split("").reverse().join("")
}

//Using ES6 syntax
function reverse(string) {
    let reversedString = ''
    for(character of string) {
        reversedString = character +reversedString
    }
    return reversedString
}

//Using simple for loop
function reverse(string) {
  let reversedString = "";

  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }

  return reversedString;
}

console.log(reverse(word));
