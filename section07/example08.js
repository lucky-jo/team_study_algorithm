function solution(meeting) {
  let count = 0;
  let time = 0;
  const result = meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  for (const x of result) {
    if (x[0] >= time) {
      count++;
      time = x[1];
    }
  }
  return count;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
