function solution(arr, queries) {
  let answer = [];

  for (let [s, e, k] of queries) {
    let temp = arr
      .filter((v, i) => i >= s && i <= e && v > k)
      .sort((a, b) => a - b)[0];
    answer.push(temp ? temp : -1);
  }

  return answer;
}

// 다른 사람의 풀이
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter(v => v > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
