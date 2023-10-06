// 다른 사람의 풀이
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i]) // [등수, 번호] 형태로 변형
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}
