function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let reverseX = 0;
    while (x !== 0) {
      reverseX = reverseX * 10 + (x % 10);
      x = parseInt(x / 10);
    }
    const result = isPrime(reverseX);
    if (result) answer.push(reverseX);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
