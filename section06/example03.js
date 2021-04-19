function solution(board, moves) {
  let count = 0;
  stack = [];

  for (const x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        const temp = board[i][x - 1];
        board[i][x - 1] = 0;
        if (stack.length !== 0 && stack[stack.length - 1] === temp) {
          stack.pop();
          count += 2;
        } else stack.push(temp);
        break;
      }
    }
  }

  return count;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
