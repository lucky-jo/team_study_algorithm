function solution(s) {
  stack = [];
  for (const x of s) {
    if (x === "+") {
      const rt = stack.pop();
      const lt = stack.pop();
      stack.push(lt + rt);
    } else if (x === "*") {
      const rt = stack.pop();
      const lt = stack.pop();
      stack.push(lt * rt);
    } else if (x === "-") {
      const rt = stack.pop();
      const lt = stack.pop();
      stack.push(lt - rt);
    } else if (x === "/") {
      const rt = stack.pop();
      const lt = stack.pop();
      stack.push(lt / rt);
    } else {
      stack.push(parseInt(x));
    }
  }
  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
