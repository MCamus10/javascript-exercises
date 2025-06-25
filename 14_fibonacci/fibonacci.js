const fibonacci = function(num) {
    if (num == 1 || num == 2){
        return 1
    } else if (num == 0) {
        return 0
    } else if (num < 0) {
        return "OOPS"
    }

    let a = 1
    let b = 1
    let fib = 0
    for (let i = 2; i < num; i++){
        fib = a + b
        a = b
        b = fib
    } 
    return fib
};

//(1,1,2,3,5,8)
// Do not edit below this line
module.exports = fibonacci;
