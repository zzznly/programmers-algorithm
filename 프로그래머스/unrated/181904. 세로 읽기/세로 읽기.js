function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}

// 다른 사람의 풀이
function solution(my_string, m, c) {
  return [...my_string].reduce((word, v, i) => {
    return (i % m) + 1 === c ? word + v : word;
  }, "");
}
