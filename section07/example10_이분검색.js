function solution(target, arr) {
  arr.sort((a, b) => a - b);
  lt = 0;
  rt = arr.length - 1;
  let answer = null;
  while (lt < rt) {
    console.log("lt", lt);
    console.log("rt", rt);
    const idx = Math.floor((lt + rt) / 2);
    console.log("idx", idx);
    const arrValue = arr[idx];
    if (target === arrValue) {
      answer = idx + 1;
      break;
    } else if (target > arrValue) lt = idx - 1;
    else rt = idx + 1;
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 99, 81, 32];
console.log(solution(32, arr));
