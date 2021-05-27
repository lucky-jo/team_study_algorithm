function solution(m, arr) {
  const n = arr.length;
  const visited = Array.from({ length: n + 1 }, () => 0);
  const graph = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  let count = 0;

  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }

  function dfs(v = 0) {
    if (v === m) {
      count++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && visited[i] === 0) {
          visited[i] = 1;
          dfs(i);
          visited[i] = 0;
        }
      }
    }
  }

  visited[1] = 1;
  dfs(1);

  return count;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
