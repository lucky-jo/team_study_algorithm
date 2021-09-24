function solution(m, arr) {
  const n = arr.length;
  const graph = Array.from({ length: n + 1 }, () => Array());
  const visited = Array.from({ length: n + 1 }, () => 0);
  for (const [a, b] of arr) {
    graph[a].push(b);
  }
  let count = 0;

  function dfs(v = 0) {
    if (v === m) {
      count++;
    } else {
      for (const x of graph[v]) {
        if (visited[x] === 0) {
          visited[x] = 1;
          dfs(x);
          visited[x] = 0;
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
