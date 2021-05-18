function solution(m, arr) {
  const n = arr.length;
  const answer = [];
  const temp = Array.from({ length: m }, () => 0);
  const visited = Array.from({ length: n }, () => 0);

  function dfs(v = 0) {
    if (v === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (visited[i] === 0) {
          visited[i] = 1;
          temp[v] = arr[i];
          dfs(v + 1);
          visited[i] = 0;
        }
      }
    }
  }
  dfs();

  console.log(answer.join("\n"));
  return answer.length;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
