function reverseNumber(number) {

  let numberStringified = JSON.stringify(number)  
  let reverse = "";
  for (let i = 0; i < numberStringified.length; i++) {
    reverse = numberStringified[i] + reverse
  }
  return parseInt(reverse) * Math.sign(number)
}

console.log(reverseNumber(-322320));
