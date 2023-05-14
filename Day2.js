//Palindromes

function palindrome (s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'') //For leetcode
    s = s.toLowerCase()
    let reversedString = ""
    for(let i = 0; i < s.length; i++) {
        reversedString = s[i] + reversedString
    }
    if(reversedString === s) {
        return true 
    }
    return false
}



console.log(palindrome("racecar"))
console.log(palindrome("harsh"))
