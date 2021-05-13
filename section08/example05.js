function solution(arr) {
  const n = arr.length;
  const visited = Array.from({ length: n }, () => 0);

  let flag = false;

  function dfs(v = 0) {
    if (flag) return;
    if (v === n) {
      let lt = 0;
      let rt = 0;
      for (var i = 0; i < n; i++) {
        if (visited[i] === 1) lt += arr[i];
        else rt += arr[i];
      }
      if (lt === rt) flag = true;
      return;
    } else {
      visited[v] = 1;
      dfs(v + 1);
      visited[v] = 0;
      dfs(v + 1);
    }
  }
  dfs();

  return flag ? "Yes" : "No";
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
