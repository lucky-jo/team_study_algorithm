function solution(s, t) {
  const map1 = {};
  for (const x of t) {
    if (map1[x]) map1[x] += map1[x] + 1;
    else map1[x] = 1;
  }
  n = t.length;
  let count = 0;
  let countSticth = 0;
  for (let i = 0; i < s.length - n + 1; i++) {
    const arr = { ...map1 };
    countSticth = 0;
    for (let j = i; j < i + n; j++) {
      if (arr[s[j]] !== undefined) arr[s[j]] -= 1;
      else {
        i = j;
        break;
      }
    }
    for (const [k, v] of Object.entries(arr)) {
      if (v !== 0) {
        countSticth = 1;
        break;
      }
    }
    if (countSticth === 0) count += 1;
  }
  return count;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
