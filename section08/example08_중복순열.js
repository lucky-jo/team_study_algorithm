function solution(n, m) {
  const arr = Array.from({ length: m }, () => 0);
  const results = [];

  function dfs(v = 0) {
    if (v === m) {
      results.push(arr.slice());
      console.log(arr.slice())
    } else {
      for (let i = 0; i < n; i++) {
        arr[v] = i + 1;
        dfs(v + 1);
      }
    }
  }

  dfs();
  // console.log(results.join("\n"));
  return results.length;
}

console.log(solution(10, 10));
