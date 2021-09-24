function solution(times) {
  let count = 0;
  let time = 0;
  times.sort((a, b) => {
    if (a[0] !== b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  for (const x of times) {
    if (x >= time) {
      count++;
      time = x;
    }
  }
  return count;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
