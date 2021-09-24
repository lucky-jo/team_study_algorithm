function solution(m, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      if (sum + arr[j] <= m) sum += arr[j];
      else break;
      if (sum === m) {
        count++;
        break;
      }
    }
  }

  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
