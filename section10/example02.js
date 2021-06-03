function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];
  return answer;
}

console.log(solution(7));

// 0 1
// 1 11 2
// 2 111 12 21
// 3 1111 112 121 211 22
