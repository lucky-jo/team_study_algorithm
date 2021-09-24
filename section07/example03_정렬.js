function solution(arr) {
  const leArry = [];
  const rtArry = [];
  for (const x of arr) {
    if (x < 0) leArry.push(x);
    else rtArry.push(x);
  }
  return [...leArry, ...rtArry].join(" ");
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
