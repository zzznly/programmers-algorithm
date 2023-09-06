function solution(numLog) {
  let answer = "";
  const calc = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  for (let i = 0; i < numLog.length - 1; i++) {
    let sub = numLog[i + 1] - numLog[i];

    answer += calc[sub];
  }

  return answer;
}
