// const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

// console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }

function getMinMax(str) {
  let string = str.split(' ').filter(function (element) { return isFinite(Number(element)) }).map(element => Number(element));
  return {
    min: Math.min(...string),
    max: Math.max(...string),
  }
}
