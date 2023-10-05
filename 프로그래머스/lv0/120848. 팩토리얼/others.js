// 다른 사람의 풀이
function solution2(n) {
  for (let i = 1, v = 1; true; v *= i++) {
    if (v > n) return i--;
  }
}
