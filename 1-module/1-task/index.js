function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) { // i = 2, т.к. на 0 умножать не надо, а на 1 - смысла нет, поэтому начинаем с двух, а для n = 0 и 1 цикл просто не начнётся и выведет 1.
    result *= i;
  }
  return result;
}
