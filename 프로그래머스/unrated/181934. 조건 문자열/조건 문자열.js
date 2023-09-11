function solution(ineq, eq, n, m) {
    const ineqObj = {
        "<": (a,b) => eq === '=' ? a <= b : a < b,
        ">": (a,b) => eq === '=' ? a >= b : a > b,
    }
    
    return ineqObj[ineq](n,m) ? 1 : 0
}