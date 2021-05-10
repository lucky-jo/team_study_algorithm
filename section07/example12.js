function solution(c, stable) {
  stable.sort((a, b) => a - b);
  let lt = 0;
  let rt = stable[stable.length - 1];
  let answer = -1;
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    let dist = stable[0];
    let count = 1;
    for (const x of stable) {
      if (x - dist >= mid) {
        dist = x;
        count++;
      }
    }
    if (count >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
