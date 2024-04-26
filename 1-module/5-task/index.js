function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  }
  else {
    let string = "";
    for (let i = 0; i < maxlength - 1; i++) {
      string += str[i];
    }
    string += "…"
    return string;
  }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 10));
console.log(truncate('Всем привет!', 20));