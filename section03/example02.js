function solution(s) {
  // 소문자 대문자를 제외한 모든 문자를 '' 처리 한다.
  const copyS = s.replace(/[^a-zA-Z]/g, "").toLowerCase();
  // 실제 값을 비교하며, 절반만 순회한다.
  for (let i = 0; i < Math.ceil(copyS.length / 2); i++) {
    if (copyS[i] !== copyS[copyS.length - i - 1]) return `NO`;
  }
  return `YES`;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
