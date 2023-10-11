function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

/* 
    주어진 문제에서 sides 배열은 삼각형의 두 변의 길이를 담고 있습니다.
    삼각형의 성립 조건에 따라서, 주어진 두 변의 길이를 이용하여 나머지 한 변의 길이를 찾아야 합니다.

    삼각형의 성립 조건은 다음과 같습니다:

    1. 두 변의 길이의 합은 나머지 한 변의 길이보다 커야 합니다.
    2. 두 변의 길이의 차는 나머지 한 변의 길이보다 작아야 합니다.
    
    이때, 나머지 한 변의 길이가 될 수 있는 최대 정수 개수는 => "주어진 두 변의 길이 중 작은 값의 두 배에서 1을 뺀 값" 입니다. 
    이렇게 계산한 이유는, 작은 값의 두 배에서 1을 뺄 경우, 나머지 한 변의 길이보다 작거나 같은 정수 중 최대값을 구할 수 있기 때문입니다.

    함수 solution은 주어진 두 변의 길이 중 작은 값을 찾고, 이 값의 두 배에서 1을 뺀 값을 반환합니다.
    이것이 나머지 한 변의 길이가 될 수 있는 최대 정수 개수입니다.
*/
