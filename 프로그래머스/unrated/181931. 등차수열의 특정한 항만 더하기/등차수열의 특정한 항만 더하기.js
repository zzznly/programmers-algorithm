function solution(a, d, included) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < included.length; i++) {
    arr.push(a + d * i);
  }

  return arr.filter((_, i) => included[i]).reduce((p, c) => p + c);
}

// 다른 사람의 풀이
function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}
