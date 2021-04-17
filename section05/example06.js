function solution(s) {
  const map1 = new Map();
  for (const x of s) {
    if (map1.has(x)) map1.set(x, map1.get(x) + 1);
    else map1.set(x, 1);
  }
  return Array.from(map1).sort((a, b) => b[1] - a[1])[0][0];
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
