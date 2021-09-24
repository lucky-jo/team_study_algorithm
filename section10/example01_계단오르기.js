function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7));

// 1 1
// 2 11 2
// 3 111 112 211
// 4 1111 112 121 211 22

//  1 2 3 5
