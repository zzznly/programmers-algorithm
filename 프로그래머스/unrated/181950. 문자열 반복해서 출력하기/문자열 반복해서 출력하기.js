const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);

  const res = Array(n).fill(str).join("");

  // 다른 사람의 풀이
  // const res = str.repeat(n); // String.prototoype.repeat(count) 내장함수!

  console.log(res);
});
