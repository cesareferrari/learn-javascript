const square = function(x) {
  return x * x;
}

console.log(square(12));


const makeNoise = function() {
  console.log('Pling!');
}

makeNoise();


const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(2, 10));


// functions have access to outside scoped bindings
let hello = 'Hello';

function helloWorld() {
  return hello + ' World';
}

console.log(helloWorld());


// bindings (or variables) that are created inside a function
// with the keyword 'var' are visible outside the function as well.

let x = 10;

if (true) {
  let y = 20;
  var z = 30;
  console.log(`x is ${x} inside the block`);
  console.log(`y is ${y} inside the block`);
  console.log(`z is ${z} inside the block`);
}

console.log(`x is ${x} outside the block`);
console.log(`y is ${y} outside the block`); // gives an error
console.log(`z is ${z} outside the block`);

// console.log(`y is ${y} outside the block`);
// ReferenceError: y is not defined



// Three different ways to define a function:

// 1.
const square = function(x) {
  return x * x;
};


// 2. 
function square(x) {
  return x * x;
}

// 3.
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

// When there is only one parameter you can omit the parentheses.
// If the body is a single expression (instead of a block) you can
// omit the braces:

// These two are the same thing:
const square1 = (x) => { return x * x; };
const square1 = x => x * x;


// When an arrow function has no parameters, use an empty set of parentheses

const horn = () => {
  console.log('Toot');
}
