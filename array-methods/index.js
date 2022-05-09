// Reduce

const employeeList = [
  { name: 'John', salaryPerHour: 1000, noOfHoursWorked: 50 },
  { name: 'Tim', salaryPerHour: 800, noOfHoursWorked: 70 },
  { name: 'Boo', salaryPerHour: 700, noOfHoursWorked: 20 },
];

// const arr = [1, 2, 3, 4, 5];
const sumOfArray = employeeList.reduce(
  (acc, currVal, index, list) => {
    // Calculating salary
    var employeeSalary = currVal.salaryPerHour * currVal.noOfHoursWorked;

    console.log(acc, employeeSalary);
    return { totalSalary: acc.totalSalary + employeeSalary };
  },
  { totalSalary: 0 }
);

var sum = 0;
for (let i = 0; i < employeeList.length; i++) {
  sum += employeeList[i];
}

console.log(sumOfArray);
console.log(sum);

console.log('End of Reduce \n\n\n');

// Sort
const unsortedList = [5, 40, 3, 2, 1];

unsortedList.sort(function (a, b) {
  return b - a;
});

console.log(unsortedList);

employeeList.sort(function (a, b) {
  return (
    b.salaryPerHour * b.noOfHoursWorked - a.salaryPerHour * a.noOfHoursWorked
  );
});
console.log(employeeList);
