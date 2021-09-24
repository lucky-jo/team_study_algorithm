function solution(arr1, arr2) {
  const answer = [];
  const sumArr = [...arr1, ...arr2];
  const results = sumArr.reduce((a, b) => {
    if (a[b]) {
      a[b] = a[b] + 1;
    } else {
      a[b] = 1;
    }
    return a;
  }, {});
  for (const [k, v] of Object.entries(results)) {
    if (v >= 2) answer.push(k);
  }
  return answer.join(" ");
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
