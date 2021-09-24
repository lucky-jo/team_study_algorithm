function solution(s) {
  let count = 0;
  stack = [];
  let lt;
  for (const x of s) {
    if (x === ")" && lt === ")") {
      stack.pop();
      count++;
    } else if (x === ")" && lt === "(") {
      stack.pop();
      count += stack.length;
    } else {
      stack.push(x);
    }
    lt = x;
  }
  return count;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
