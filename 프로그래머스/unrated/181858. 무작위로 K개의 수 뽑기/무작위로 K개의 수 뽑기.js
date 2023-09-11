function solution(arr, k) {
  let answer = [];

  const set = [...new Set(arr)];

  for (let i = 0; i < k; i++) {
    answer.push(set[i] ?? -1);
  }

  return answer;
}

// 다른 사람의 풀이
function solution2(arr, k) {
  const set = new Set(arr);

  return set.size < k
    ? [...Array.from(set), ...Array(k - set.size).fill(-1)]
    : [...set.slice(0, k)];
}

function solution3(arr, k) {
  return [...Array.from(new Set(arr)), ...Array(k).fill(-1)].slice(0, k);
}
