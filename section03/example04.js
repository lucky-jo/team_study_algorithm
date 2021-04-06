function solution(s, t) {
  let count = 0;
  const arr = Array.from({ length: s.length }, () => 0);
  // 앞에서부터 순회하여, t 와의 거리를 계산
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) count = 0;
    else count += 1;
    arr[i] = count;
  }
  // 뒤에서부터 순회하여, 기존 arr 값과 현재 거리 중 작은 값을 저장
  count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) count = 0;
    else count += 1;
    arr[i] = Math.min(count, arr[i]);
  }
  return arr.join(" ");
}

let str = "teachermode";
console.log(solution(str, "e"));
