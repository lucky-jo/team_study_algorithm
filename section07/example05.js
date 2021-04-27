function solution(size, arr) {
  const answer = [];
  for (const x of arr) {
    const idx = answer.indexOf(x);
    if (idx === -1) answer.unshift(x);
    else {
      answer.splice(idx, 1);
      answer.unshift(x);
    }
    if (answer.length === size + 1) answer.pop();
  }
  return answer.join(" ");
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
