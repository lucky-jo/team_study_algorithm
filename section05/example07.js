function solution(str1, str2) {
  const map1 = new Map();
  for (const x of str1) {
    if (map1.has(x)) map1.set(x, map1.get(x) + 1);
    else map1.set(x, 1);
  }
  for (const x of str2) {
    if (map1.has(x) && map1.get(x) > 0) map1.set(x, map1.get(x) - 1);
    else return `No`;
  }
  for (const [k, v] of map1) {
    if (v !== 0) return `No`;
  }
  return `Yes`;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
