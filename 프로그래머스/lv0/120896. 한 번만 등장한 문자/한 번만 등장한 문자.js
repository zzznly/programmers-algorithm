function solution(s) {
    let answer = [];
    
    for (let x of s) {
        if(s.indexOf(x) === s.lastIndexOf(x)) answer.push(x)
    }
    
    return answer.sort().join('')
}