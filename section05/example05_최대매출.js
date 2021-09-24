function solution(k, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length - k + 1; i++) {
    if (arr[i] + arr[i + 1] + arr[i + 2] > max)
      max = arr[i] + arr[i + 1] + arr[i + 2];
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
