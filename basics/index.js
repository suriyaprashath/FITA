let a = 10;
const B = 20;
var c = 30;

console.log(a, B, c);

a = 'ten';
c = 60;

console.log(a, B, c);

// Primitive types
let bool = false;
let number = 9007199254740991;
let bignum = 9007199254740991n;
let str = 'This is a string';
let abc = null;
let temp;

console.log(bool, number, bignum, str, abc, temp);
console.log(bool, number + 10, bignum + 10n);
console.log(typeof bool);
console.dir(typeof number);
console.dir(typeof bignum);
console.dir(typeof str);
console.dir(typeof abc);
console.dir(typeof temp);


// Object
let arr = [1, 2, 3, 'four', null, undefined, {
  brand: 'Maruthi',
  model: 'Alto',
  price: 300000
}];
let obj = {
  brand: 'Maruthi',
  price: 300000,
  model: 'Alto',
  location: ['Chennai', 'Coimbatore']
};
let date = new Date();

console.log(arr);
console.log(obj);
console.log(date);
console.log(typeof(arr));
console.log(typeof(obj));
console.log(typeof(date));
console.log(date instanceof Date);

// Conditions
let num1 = 9;

if(num1%2 === 0) {
  alert('Number is even');
} else if (num1%2 !== 0) {
  alert('Number is odd');
}

// Functions
function add (a, b) {
  // console.log(a+b);
  return a+b;
}

console.log('Calling add function: ', add(10, 20));

let arrowAdd = (a, b) => {
  return a + b;
}

console.log('Calling arrow add function: ', arrowAdd(10, 20));
