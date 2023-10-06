// 다른사람의 풀이

function solution1(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(v => num_list.splice(0, n));
} // => splice()는 원본 배열을 변형시킨다.

function solution2(num_list, n) {
  let answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
} // => for 대신 while을 사용하면 간단해진다
