function solution(n) {
  function factor(n) {
    if (n === 1) return 1;
    return n * factor(n - 1);
  }
  return factor(n);
}

console.log(solution(5));
