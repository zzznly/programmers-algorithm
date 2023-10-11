function solution(numbers) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numbers.length; i++) {
    numbers = numbers.split(num[i]).join(i);
  }

  return +numbers;
}

function solution1(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  numbers = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    v => obj[v]
  );

  return numbers;
}

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
