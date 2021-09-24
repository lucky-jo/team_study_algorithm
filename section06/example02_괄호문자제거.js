function solution(s) {
  const stacks = [];
  for (const x of s) {
    if (x === ")") {
      while (true) {
        if (stacks.pop() === "(") break;
      }
    } else stacks.push(x);
  }
  return stacks.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
