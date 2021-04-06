function solution(s) {
  let prevStr = "";
  let count = 0;
  let answer = "";
  for (const v of s) {
    if (v === prevStr) count++;
    else {
      prevStr = v;
      count === 0 ? (answer += v) : (answer += count + 1 + v);
      count = 0;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
