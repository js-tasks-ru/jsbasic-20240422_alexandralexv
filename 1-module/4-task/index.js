function checkSpam(str) {
  let string = str.toLowerCase();
  if (string.indexOf('1xbet') != -1 || string.indexOf('xxx') != -1) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkSpam('1XbeT now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));