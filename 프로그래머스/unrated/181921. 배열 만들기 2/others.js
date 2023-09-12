// 다른 사람의 풀이
function solution(l, r) {
  const result = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    n => /^[05]+$/.test(n) // 정규표현식 - 시작(^)부터 끝($)까지 [0 또는 5]로만 이루어진 문자열 찾기
  );
  return result.length ? result : [-1];
}
