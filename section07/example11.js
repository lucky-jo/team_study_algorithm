function solution(m, songs) {
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  let answer = Number.MAX_SAFE_INTEGER;
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    let dvd = [0];
    for (const x of songs) {
      if (dvd[dvd.length - 1] + x <= mid) dvd[dvd.length - 1] += x;
      else dvd.push(x);
    }
    if (dvd.length >= m) {
      answer = Math.min(answer, mid);
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
