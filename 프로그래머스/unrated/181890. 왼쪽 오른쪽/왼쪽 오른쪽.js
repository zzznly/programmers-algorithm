function solution(str_list) {
  let answer = [];

  const idx = str_list.findIndex(v => v === "l" || v === "r");

  if (idx === -1) return [];
  if (str_list[idx] === "l") answer = str_list.slice(0, idx);
  else answer = str_list.slice(idx + 1);

  return answer;
}

// 다른 사람의 풀이
function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") return str_list.slice(0, i);
    if (str_list[i] === "r") return str_list.slice(i + 1);
  }
  return [];
}
