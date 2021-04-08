function solution(m, product) {
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let sum = 0;
  let idx = 0;
  let count = 0;
  for (let i = 0; i < product.length; i++) {
    const add = product[i][0] + product[i][1];
    if (sum + add <= m) {
      sum += add;
      count++;
      idx = i;
    } else if (sum + product[i][0] / 2 + product[i][1] <= m) {
      sum += add;
      count++;
      idx = i;
      break;
    }
  }
  return count;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
