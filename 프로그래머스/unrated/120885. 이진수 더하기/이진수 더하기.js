function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// parseInt()
// 1. 정수로 변환
// * 2. n 진수의 수를 10진수 정수로 변환 - ex. parseInt("1011", 2)

// toString()
// 1. 문자열로 변환
// * 2. 숫자의 경우 선택적으로 기수(2~36)를 매개변수로 취하며, 이를 통해 10진수를 특정 진수로 변환한 값 반환 - ex. num.toString(2)
