function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      answer.push(i + 1);
      break;
    }
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] <= arr[i - 1]) {
      answer.push(i + 1);
      break;
    }
  }
  return answer.join(" ");
}

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
