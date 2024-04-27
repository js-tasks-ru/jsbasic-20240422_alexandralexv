function ucFirst(str) {
  if (str == "") {
    return ""
  }
  else {
    let len = str.length;
    let result = str[0].toUpperCase();
    for (let i = 1; i < len; i++) {
      result += str[i];
    }
    return result;
  }
}

console.log(ucFirst('gsfg'));