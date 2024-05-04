// let arr = [5, 3, 8, 1];

// console.log(filterRange(arr, 1, 4)); // [3,1] (совпадающие значения)
// console.log(arr); // [5,3,8,1] (без изменений)

function filterRange(arr, a, b) {
  return arr.filter(function (item) { return item >= a && item <= b })
}
