// Filter even numbers
var arr = [1, 2, 3, 4, 5];

let evenList = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenList.push(arr[i]);
  }
}
console.log(evenList);

let evenList1 = arr.filter((value) => {
  return value % 2 === 0;
});

console.log(evenList1);

// Square each number in the list
let squareList = arr.map((value) => {
  return value * value;
});
console.log(squareList);

// Sum of array
const sum = arr.reduce((acc, value) => {
  return acc + value;
}, 0);
console.log(sum);

// Sort Array
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

let employeeList = [
  {
    name: 'John',
    id: 1000,
    age: 29,
    monthlySalary: 50000,
  },
  {
    name: 'Jack',
    id: 1001,
    age: 36,
    monthlySalary: 90000,
  },
  {
    name: 'Jill',
    id: 1002,
    age: 35,
    monthlySalary: 80000,
  },
];
// Filter employee by age
let employeeAbove30Age = employeeList.filter((emp) => {
  var isAgeGreaterThan30 = emp.age > 30;

  return isAgeGreaterThan30;
});

console.log(employeeAbove30Age);

// List employee names
employeeList.forEach((employee) => {
  console.log(employee.name);
});

// Find total monthly salary above 30 years of age
const montlySalaryOfEmployeesAbove30 = employeeList.reduce((acc, employee) => {
  if (employee.age > 30) {
    return acc + employee.monthlySalary;
  }

  return acc;
}, 0);
console.log(montlySalaryOfEmployeesAbove30);

const monthlySalaryOfEmployeesAbove30InACleanWay = employeeList
  .filter((employee) => {
    return employee.age > 30;
  })
  .reduce((acc, employee) => {
    return acc + employee.monthlySalary;
  }, 0);
console.log(monthlySalaryOfEmployeesAbove30InACleanWay);

// Sort employee by salary - highest to lowest
employeeList.sort((a, b) => {
  return b.monthlySalary - a.monthlySalary;
});
console.log(employeeList);
