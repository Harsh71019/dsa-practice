//Max Char Problems

function maxChars(string) {
    let object = {}
    let max = 0
    let maxChar = 0

    for(let char of string) {
        object[char] ? object[char]++ : object[char] = 1
    }
    for(let char in object) {
        if(object[char] > max) {
             max = object[char]
             maxChar = char
        } 
    }

    return maxChar
} 

console.log(maxChars("hfffffffiej flwfomf fwef "))