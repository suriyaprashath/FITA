console.log('Array Methods!!!');

var arr = [1, 2, 3, 4, 5];

var evenArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]);
  }
}

console.log(evenArr);

// Filter
let evenArrFilter = arr.filter((value, index, list) => {
  return value % 2 === 0;
});

console.log(evenArrFilter);

// For Each
arr.forEach((value, index, list) => {
  console.log(value, index, list);
});

// Map
let mapArray = arr.map((value, index, list) => {
  return value * value;
});

console.log(mapArray);

// Splice
var toSpliceArr = ['a', 'b', 'c', 'd', 'e'];
let splicedArray = toSpliceArr.splice(2, 1);

console.log(splicedArray);
console.log(toSpliceArr);

// Sort
var unsortedArray = [22, 67, 13, 100, 99];
unsortedArray.sort((a, b) => {
  return a - b;
});
// unsortedArray.sort();

console.log(unsortedArray);

// Reduce
var toReduceArr = [1, 2, 3, 4, 5];
let reducedValue = toReduceArr.reduce((acc, value, index, list) => {
  console.log(acc, value);

  return acc + value;
}, 0);

console.log(reducedValue);
