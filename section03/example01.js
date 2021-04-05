// 빠르게 답을 구하는 방법
// function solution(s) {
//   const copyS = s.split("").reverse().join("");
//   return s === copyS ? `YES` : `NO`;
// }

function solution(s) {
  // 실제 값을 비교하며, 절반만 순회한다.
  for (let i = 0; i < Math.ceil(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) return `NO`;
  }
  return `YES`;
}

let str = "goooG";
console.log(solution(str));
