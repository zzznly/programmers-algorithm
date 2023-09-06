function solution(date1, date2) {
  let answer = 0;

  const [year1, month1, day1] = date1;
  const [year2, month2, day2] = date2;

  if (year1 < year2) {
    answer = 1;
  } else if (year1 > year2) {
    answer = 0;
  } else {
    if (month1 < month2) answer = 1;
    else if (month1 > month2) answer = 0;
    else {
      if (day1 < day2) answer = 1;
      else answer = 0;
    }
  }

  return answer;
}

// 다른사람의 풀이
const solution = (date1, date2) => {
  return new Date(date1) < new Date(date2) ? 1 : 0; // 아 new Date() 왜 생각 못했냐... 바보
};

const solution = (date1, date2) => {
  return +(new Date(date1) < new Date(date2));
};
