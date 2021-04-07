function solution(n, arr) {
  let max = 0;
  let maxArr = [];
  for (const x of arr) {
    const temp = sumMod(x);
    if (temp >= max) {
      max = temp;
      maxArr.push(x);
    }
  }
  maxArr.sort((a, b) => b - a);
  return maxArr[0];
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

function sumMod(num) {
  let sum = 0;
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
