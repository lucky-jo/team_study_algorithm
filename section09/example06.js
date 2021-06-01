function solution(s, e) {
  let answer = 0;
  let visited = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  visited[s] = 1;
  dis[s] = 0;
  let flag = false;

  while (!flag && queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) {
        answer = dis[x] + 1;
        flag = true;
      } else if (nx > 0 && nx <= 10000 && visited[nx] === 0) {
        visited[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

console.log(solution(8, 3));
