// 다른 사람의 풀이
function solution1() {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
