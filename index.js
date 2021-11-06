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

function makeInt(n) {
  return parseInt(n, 10);
}

// console.log(makeInt("2"));

// console.log(makeInt("0x2328"));

// let c = makeInt("sldkjflksjf");
// console.log(isNaN(c));

function preserveDecimal(n) {
  return parseFloat(n);
}

// console.log(preserveDecimal("2.222"));

// let d = preserveDecimal("sldkjflksjf");
// console.log(isNaN(d));
