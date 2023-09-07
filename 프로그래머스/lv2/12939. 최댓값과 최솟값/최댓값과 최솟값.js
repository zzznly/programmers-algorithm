const solution = s => {
  const split = [...s.split(" ")].map(v => +v);

  return Math.min(...split).toString() + " " + Math.max(...split).toString();
};

// 다른 사람의 풀이
const solution2 = s => {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr); // Math.max, min은 문자열을 취급한다!
};
