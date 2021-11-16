function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(a) {
  return ++a;
}

function decrement(a) {
  return --a;
}

const makeInt = (n) => {
  return parseInt(n.toString(), 10);
}

console.log(makeInt(10));
console.log(makeInt('0x2328'));
console.log(isNaN(makeInt('sldkjflksjf')));

function preserveDecimal(n){
  return parseFloat(n);
}

console.log(preserveDecimal('2.222'));
console.log(isNaN(preserveDecimal('sldkjflksjf')));