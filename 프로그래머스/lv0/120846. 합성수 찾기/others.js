function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter(v => {
      let cnt = 0;

      for (let i = 1; i <= n; i++) {
        if (n % x === 0) cnt++;
      }

      return cnt >= 3;
    }).length;
}
