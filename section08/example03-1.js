function solution(n) {
  let answer = "";

  function dfs(v = 1) {
    if (v > 7) {
      return;
    } else {
      answer += `${v} `;
      dfs(v * 2);
      dfs(v * 2 + 1);
    }
  }

  dfs();

  return answer;
}

console.log(solution(1));
