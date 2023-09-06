function solution(a, d, included) {
    let answer = 0;
    let arr = [];
    
    for(let i = 0; i < included.length; i++) {
        arr.push(a + d * i)
    }
    
    return arr.filter((_, i) => included[i] === true).reduce((p, c) => p + c);
}