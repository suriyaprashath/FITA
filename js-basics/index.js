var a;
let b = 20;
const c = 30;

a = 'john';
b = 'smith';

console.log(a, b, c);

// Datatypes
var bool = true;
var noValue;
var nullValue = null;
var number = 9007199254740991;
var bigNumber = 9007199254740996n;
var str = 'John Smith';

bool = false;

console.log(bool, typeof bool);
console.log(noValue, typeof noValue);
console.log(nullValue, typeof nullValue);
console.log(number, typeof number);
console.log(bigNumber, typeof bigNumber);
console.log(str, typeof str);

// Array
var arr = [1, 2, 3, 4, 5];
var copyArr = arr;
arr.pop();
arr.push(10);
arr.shift();
arr.unshift(-1);

console.log(arr, typeof arr);
console.log(copyArr, typeof copyArr);
console.log(arr.length);

// Object
var obj = {
  name: 'John',
  age: 20,
};
var copyObj = obj;
obj.age = 30;

console.log(obj, typeof obj);
console.log(copyObj, typeof copyObj);
console.log(obj.age);
console.log(obj['age']);

// Date
var date = new Date();
var dateFn = Date();
var utcDate = date.toUTCString();

console.log(date, typeof date);
console.log(utcDate, typeof utcDate);
console.log(dateFn, typeof dateFn);

// Operators
var aa = 10;
var bb = 20;
var cc = '30';
var dd = 30;
var str1 = 'John';
var str2 = 'Smith';

var sum = aa + bb;
console.log(sum);
aa++;
console.log(aa);
aa += 10; // aa = aa + 10;
console.log(aa);
console.log(aa + cc);
console.log(str1 + str2);

console.log(cc !== dd);
console.log(bb >= dd);

var ee = bb < dd ? 10 : 20;
console.log(ee);

console.log(bb !== 0 && dd > 20);
console.log(!(bb !== 0 || dd < 20));

// Control flow
var num = 5;
if (num % 2 === 0) {
  console.log('Even Number: ', num);
} else if (num > 10) {
  console.log('Number is greater than 10: ', num);
} else {
  console.log('Odd Number: ', num);
}

var list = [1, 2, 3, 4, 5];
var copyListSquare = [];
for (var i = 0; i < list.length; i++) {
  if (i === 2) {
    continue;
  }
  copyListSquare[i] = list[i] * list[i];
}
console.log(copyListSquare);

var copyListSquareWhile = [];
var i = 0;
while (i < list.length) {
  copyListSquareWhile[i] = list[i] * list[i];
  i++;
}
console.log(copyListSquareWhile);

var copyListSquareDoWhile = [];
var i = 0;
do {
  copyListSquareDoWhile[i] = list[i] * list[i];
  i++;
} while (i < list.length);
console.log(copyListSquareDoWhile);

var age = 21;
switch (age > 20 ? 'Adult' : 'Teen') {
  case 'Kid':
    console.log('Age should be less than 10');
    break;

  case 'Teen':
    console.log('Age should be between 10 and 20');
    break;

  case 'Adult':
    console.log('Age should be above 20');
    break;

  default:
    console.log('Please enter a valid age');
    break;
}

try {
  var wrongObj = {};
  console.log(wrongObj.a.b);
} catch (e) {
  console.log('Catched error: ', e);
}

try {
  var oddNumber = 3;

  if (oddNumber % 2 === 0) {
    throw 'Number is not odd';
  }

  console.log('After throw');
} catch (e) {
  console.log('Catched error: ', e);
}

console.log('After wrong code');