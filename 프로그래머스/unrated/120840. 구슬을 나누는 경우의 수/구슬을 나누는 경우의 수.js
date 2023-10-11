function factorial(n) {
    return n === 0 ? 1 : n * factorial(n-1)
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
}