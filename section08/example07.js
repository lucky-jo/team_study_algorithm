function solution(m, ps, pt) {
  const n = ps.length;
  let max = 0;
  const visited = Array.from({ length: n }, () => 0);

  function dfs(v = 0, psSum = 0, ptSum = 0) {
    if (!(ptSum <= m && v <= n)) {
      return;
    } else {
      if (max < psSum) max = psSum;
      dfs(v + 1, psSum + ps[v], ptSum + pt[v]);
      dfs(v + 1, psSum, ptSum);
    }
  }

  dfs();
  return max;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
