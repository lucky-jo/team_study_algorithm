function solution(test) {
  const n = test[0].length;
  let couple = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      couple.push([i, j]);
    }
  }
  const answer = couple.filter((value) => {
    for (let i = 0; i < test.length; i++) {
      const mento = test[i].indexOf(value[0]);
      const menti = test[i].indexOf(value[1]);
      if (mento >= menti) {
        return false;
      }
    }
    return true;
  });
  // console.log(answer);

  return answer.length;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
