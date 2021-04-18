function solution(s) {
  const stacks = [];
  for (const x of s) {
    if (x === "(") stacks.push(x);
    else if (x === ")") stacks.pop();
  }
  return stacks.length === 0 ? `YES` : `NO`;
}

let a = "(()(()))(()";
console.log(solution(a));
