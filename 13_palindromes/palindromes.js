const palindromes = function (string) {
    const chars = "abcdefghijklmnopqrstuvwxyz123456789"
    const newStr = string.toLowerCase().split("")
        .filter((char) => chars.includes(char))
        .join("") 
    
    const revStr = newStr.split("").reverse().join("")    
    if (newStr == revStr){
        return true
    } else return false
};
// Do not edit below this line
module.exports = palindromes;
