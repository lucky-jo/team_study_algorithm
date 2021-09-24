function solution(arr) {
  const n = arr.length;
  const dy = Array.from({ length: n }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
  }
  console.log(dy);
  return Math.max(...dy);
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
