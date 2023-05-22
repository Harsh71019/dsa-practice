// Integer reversal

function integerReversal (number) {
    const reversedNumber = number.toString().split("").reverse().join("")
    return parseInt(reversedNumber) * Math.sign(number)
}

console.log(integerReversal(-500))