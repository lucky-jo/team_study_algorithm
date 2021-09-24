function solution(m, arr) {
  let answer = 0;
  let flag = false;

  function dfs(v = 0, sum = 0) {
    if (flag) return;
    if (sum > m) {
      return;
    } else if (sum === m) {
      flag = true;
      answer = v;
    } else {
      for (let i = arr.length - 1; i >= 0; i--) {
        dfs(v + 1, sum + arr[i]);
      }
    }
  }

  dfs();

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
