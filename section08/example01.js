function solution(n) {
  let answer = [];

  function dfs(n = 1) {
    if (n > 0) {
      dfs(n - 1);
      answer.push(n);
    }
  }

  dfs(n);

  return answer.join(" ");
}

console.log(solution(3));
