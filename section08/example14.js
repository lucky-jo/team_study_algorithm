function solution(n, m) {
  const temp = Array.from({ length: m }, () => 0);
  const answer = [];

  function dfs(v = 0, j = 1) {
    if (v === m) {
      answer.push(temp.slice());
    } else {
      for (let i = j; i <= n; i++) {
        temp[v] = i;
        dfs(v + 1, i + 1);
      }
    }
  }

  dfs();

  console.log(answer.join("\n"));
  return answer.length;
}

console.log(solution(4, 2));
