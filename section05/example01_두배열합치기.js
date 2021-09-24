// 빠르게 풀기   n log n
// function solution(arr1, arr2) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// 투 포인트
function solution(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;
  const answer = [];
  let left = 0;
  let right = 0;
  while (left < n || right < m) {
    if (n !== left && m !== right) {
      if (arr1[left] <= arr2[right]) {
        answer.push(arr1[left]);
        left++;
      } else {
        answer.push(arr2[left]);
        right++;
      }
    } else if (n !== left) {
      answer.push(arr1[left]);
      left++;
    } else {
      answer.push(arr2[right]);
      right++;
    }
  }
  return answer.join(" ");
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
