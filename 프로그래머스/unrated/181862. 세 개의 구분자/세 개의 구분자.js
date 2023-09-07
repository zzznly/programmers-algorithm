function solution(myStr) {
  return myStr.split(/[a|b|c]/g).filter(v => v).length
    ? myStr.split(/[a|b|c]/g).filter(v => v)
    : ["EMPTY"];
}

// 다른 사람의 풀이
function solution(str) {
  return str.match(/[^a-c]/g) || ["EMPTY"];
}
