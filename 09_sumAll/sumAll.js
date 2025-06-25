const sumAll = function(a, b) {
    let min = a
    let max = b
    if (a < 0 || b < 0 || a == NaN || b == NaN || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"

    } else if (a > b){
        min = b
        max = a
    }

    let sum = 0
    for (let i=min; i<=max; i++){
        sum += i
    } return sum
};

// Do not edit below this line
module.exports = sumAll;
