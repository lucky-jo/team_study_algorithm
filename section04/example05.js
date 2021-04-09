function solution(n, k, card) {
  // sort 할 경우 갯수가 많으면, 시간이 오래걸릴것 같아 중복 제거하여 갯수를 줄이기 위해, Set 에 저장
  const set1 = new Set();
  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      for (let k = j + 1; k < card.length; k++) {
        set1.add(card[i] + card[j] + card[k]);
      }
    }
  }
  const results = Array.from(set1);
  const answer = results.sort((a, b) => b - a);

  return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
