function solution(n, k) {
  let queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }

  while (queue.length !== 1) {
    for (let i = 0; i < k; i++) {
      if (i === k - 1) {
        queue.shift();
      } else {
        queue.push(queue.shift());
      }
    }
  }
  return queue[0];
}

console.log(solution(8, 3));
