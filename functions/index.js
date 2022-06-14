function add(a, b) {
  var total = a + b;

  return total;
}

var sum = add(5, 6);
console.log(sum);

var a = 10; // Global scope
var arrFnAdd = (b) => {
  var total = a + b; // Local or Function scope

  if (b < 50) {
    var c = 100; // Block scope
  }

  return total + c;
};

var arrFnSum = arrFnAdd(20);
console.log(arrFnSum);

// Hoisting
function hoistExample() {
  // var value;
  console.log(value);

  // value = 10;
  var value = 10;
  console.log(value);
}

hoistExample();

// Global variable leaks
function leak() {
  var a = 20;
  console.log('Leak: ', a);
}

function leakImpact() {
  console.log('Impact: ', a);
}

leak();
leakImpact();

// Closures
function multiply(b) {
  var a = 30;

  return function doMultiply() {
    console.log('Multiplication result: ', a * b);
  };
}

let multiplyOperation = multiply(5);

multiplyOperation();

for (var i = 0; i < 5; i++) {
  (function (i) {
    console.log('Before settimeout: ', i);
    setTimeout(function () {
      console.log('Iteration value: ', i);
    }, 1000);
  })(i);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log('Iteration value: ', i);
  }, 1000);
}
