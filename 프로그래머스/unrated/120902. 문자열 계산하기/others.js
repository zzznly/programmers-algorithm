// sol. 1
var solution = eval; // eval() - 문자를 코드로 인식하게 하는 함수

// sol. 2
function solution(my_string) {
  return eval(my_string);
}

// sol. 3
function solution(my_string) {
  return new Function("return " + my_string)();
}
