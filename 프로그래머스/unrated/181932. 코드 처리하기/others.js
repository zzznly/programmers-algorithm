// 다른 사람의 풀이
function solution(code) {
  let ret = "";
  let mode = 0;

  for (let i = 0; i < code.length; i += 1) {
    if (Number(code[i]) === 1) {
      mode = mode === 1 ? 0 : 1;
    }
    if (Number(code[i]) !== 1 && i % 2 === mode) {
      ret += code[i];
    }
  }

  return ret || "EMPTY";
}

console.log(solution1("abc1abc1abc")); // "acbac"
