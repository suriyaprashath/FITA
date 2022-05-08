console.log('This is JS!!!');

// Primitive Types
var numberType = 900719925474099100n;
var boolType = true;
var empty = null;
var undef;
var str = 'This is a string';

console.log(numberType, typeof numberType);
console.log(boolType, typeof boolType);
console.log(empty, typeof empty);
console.log(undef, typeof undef);
console.log(str, typeof str);

// Array

var arrA = [1, 2, 3, 4];
var arrB = [1, 2, 3, 4];

// arrA.push(5)
arrA.unshift(0);
arrA.pop();
arrA.shift();

console.log(arrA, arrB);
console.log(arrA === arrB);

// Object
var person = {
  name: 'John',
  age: 20,
  experience: ['IBM', 'Facebook'],
  friend: { name: 'Abu', age: 22 },
};

var personArr = ['John', 20];

console.log(person.age);
console.log(personArr[1]);

// Date
var date = Date.now();

console.log(date);

// Operators
var employee = {
  name: 'John',
  exp: 5,
  salaryPerHour: 500,
  hoursWorkedThisMonth: 118,
};

console.log(employee.salaryPerHour * employee.hoursWorkedThisMonth);

var a = 20;
var b = 30;
var c = !(a > b) === 0 ? 'a is lesser' : 'a is greater';

console.log(c);

// Control Flow
if (a > b && a % 2 == 0) {
  console.log('a is greater and even');
} else if (a > b) {
  console.log('a is greater');
} else if (a % 2 == 0) {
  console.log('a is even');
} else {
  console.log('a is lesser and not even');
}

var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(arr[i]);
}

var i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

try {
  var a = [1, 2, 3];

  if (a[2] !== undefined) {
    console.log(a[2] + 1);
  } else {
    throw 'Value not defined';
  }
} catch (e) {
  console.log(e);
} finally {
  console.log('Finally');
}

const courses = ['Mechanical', 'CSE', 'IT', 'Civil'];
var myCourseIndex = 0;

if (courses[myCourseIndex] === 'Mechanical') {
  console.log('I am a Mechanical Engineer');
} else if (courses[myCourseIndex] === 'CSE') {
  console.log('I am a CSE Engineer');
} else if (courses[myCourseIndex] === 'IT') {
  console.log('I am a IT Engineer');
} else if (courses[myCourseIndex] === 'Civil') {
  console.log('I am a Civil Engineer');
} else {
  console.log('No valid course');
}

switch (courses[myCourseIndex]) {
  case 'Mechanical':
    console.log('I am a Mechanical Engineer');
    break;

  case 'CSE':
    console.log('I am a CSE Engineer');
    break;

  case 'IT':
    console.log('I am a IT Engineer');
    break;

  case 'Civil':
    console.log('I am a Civil Engineer');
    break;

  default:
    console.log('No valid course');
    break;
}
