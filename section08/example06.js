function solution(c, arr) {
  const n = arr.length;
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(v = 0, sum = 0) {
    if (sum > c) return;
    if (v === n) {
      if (max < sum) max = sum;
    } else {
      dfs(v + 1, sum + arr[v]);
      dfs(v + 1, sum);
    }
  }
  dfs();
  return max;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
