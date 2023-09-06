function solution(num) {
    return [...num].reduce((c, p) => c + +p, 0) % 9
}