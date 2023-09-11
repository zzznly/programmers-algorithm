function solution(arr) {
  let stk = [];

  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }

  return stk;
}

// 다른 사람의 풀이
function solution2(arr) {
  let stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      continue;
    }

    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      continue;
    }

    stk.pop();
    i--;
  }

  return stk;
}

function solution3(arr) {
  let stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      continue;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        continue;
      } else {
        stk.pop();
        i--;
      }
    }
  }

  return stk;
}
