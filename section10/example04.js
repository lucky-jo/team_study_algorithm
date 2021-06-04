function solution(m, coin) {
  const visited = Array.from({ length: 501 }, () => 0);
  const dy = Array.from({ length: 501 }, () => 0);
  const queue = [0];

  while (queue.length) {
    const x = queue.shift();
    for (const v of [x + arr[0], x + arr[1], x + arr[2]]) {
      if (visited[v] === 0) {
        visited[v] = 1;
        dy[v] = dy[x] + 1;
        queue.push(v);
      }
    }
  }
  return dy[m];
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
