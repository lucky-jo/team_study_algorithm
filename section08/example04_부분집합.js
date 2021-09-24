function solution(n) {
  const answer = [];
  const visited = Array.from({ length: n }, () => 0);

  function dfs(v = 0) {
    if (v === n) {
      let node = "";
      for (let i = 0; i < n; i++) {
        if (visited[i] === 1) {
          node += `${i + 1} `;
        }
      }
      if (node.length > 0) answer.push(node);
    } else {
      visited[v] = 1;
      dfs(v + 1);
      visited[v] = 0;
      dfs(v + 1);
    }
  }

  dfs();

  return answer.join("\n");
}

console.log(solution(3));
