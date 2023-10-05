function getFactorial(m) {
  let factorial = 1;

  for (let i = 1; i < m; i++) {
    factorial = m * (m - 1) * getFactorial(m - 2);
  }

  return factorial;
}

function solution(n) {
    let max = 1;

    for (let i = 1; i <= 10; i++) {
        if (getFactorial(i) <= n) max = i;
    }

    return max;
}
