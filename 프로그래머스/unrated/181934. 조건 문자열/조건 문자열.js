function solution(ineq, eq, n, m) {
  const ineqObj = {
    "<": (a, b) => (eq === "=" ? a <= b : a < b),
    ">": (a, b) => (eq === "=" ? a >= b : a > b),
  };

  return ineqObj[ineq](n, m) ? 1 : 0;
}

// 다른 사람의 풀이
const operation = {
  ">=": (x, y) => x >= y,
  "<=": (x, y) => x <= y,
  ">!": (x, y) => x > y,
  "<!": (x, y) => x < y,
};

function solution(ineq, eq, n, m) {
  return operation[ineq + eq](n, m) ? 1 : 0;
}
