function solution(n, k, arr, m) {
  const temp = Array.from({ length: k }, () => 0);
  let count = 0;
  function dfs(v = 0, j = 0) {
    if (v === k) {
      const sum = temp.reduce((a, b) => a + b, 0);
      if (sum % m === 0) count++;
    } else {
      for (let i = j; i < n; i++) {
        temp[v] = arr[i];
        dfs(v + 1, i + 1);
      }
    }
  }
  dfs();
  return count;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
