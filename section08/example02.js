function solution(n) {
  const answer = [];

  function dfs(n = 1) {
    if (n > 0) {
      const mod = n % 2;
      dfs(Math.floor(n / 2));
      answer.push(mod);
    }
  }

  dfs(11);
  return answer.join(" ");
}

console.log(solution(11));
