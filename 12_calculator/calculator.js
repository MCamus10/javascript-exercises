const add = function(a, b) {
	const sum = a + b
  return sum
};

const subtract = function(a , b) {
	const sub = a - b
  return sub
};

const sum = function(arr) {
  let sum = 0
	for (let i=0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
};

const multiply = function(arr) {
  let mult = 1
	for (let i=0; i < arr.length; i++){
    mult = mult * arr[i]
  }
  return mult
};

const power = function(a, b) {
	let pow = a ** b
  return pow

};

const factorial = function(a) {
  let fact = 1
	if (a == 0){
    return fact
  } else {
    for (let i=1; i<=a; i++){
      fact = fact * i
    } return fact
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
