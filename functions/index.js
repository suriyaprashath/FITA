// Functions

function add(a, b) {
  const result = a + b;

  return result;
}

const addArrowFn = (a, b) => {
  const result = a + b;

  return result;
};

var total = addArrowFn(5, 6);

console.log(total);

// Scopes
var message = 'Welcome';

function greet() {
  var name = 'John';
  let age = 18;

  function isAdult() {
    age = 16;
    if (age >= 18) {
      let category = 'adult';
      console.log(message, name, category);
    } else {
      let category = 'teen';
      console.log(message, name, category);
    }
  }

  isAdult();

  console.log(age);

  console.log('Inside greet: ', name);
}

greet();

console.log('Outside greet: ', name);
console.log(message);

// Closures
function addition() {
  let a = 10;
  
  var add = function(b) {
    console.log(a+b);
  }

  return add;
}

var findTotal = addition();

findTotal(5);
