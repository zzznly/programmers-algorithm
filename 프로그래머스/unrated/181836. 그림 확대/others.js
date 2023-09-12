// 다른 사람의 풀이
function solution(picture, k) {
  let answer = [];

  picture.forEach(row => {
    const expanded = [...row].reduce((p, c) => p + c.repeat(k), "");

    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);
/*
    ..xxxx......xxxx..
    ..xxxx......xxxx..
    xx....xx..xx....xx
    xx....xx..xx....xx
    xx......xx......xx
    xx......xx......xx
    ..xx..........xx..
    ..xx..........xx..
    ....xx......xx....
    ....xx......xx....
    ......xx..xx......
    ......xx..xx......
    ........xx........
    ........xx........
*/
