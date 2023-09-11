function solution(n) {
    let answer = [];
    
    for(let x = 1; x <= n; x++) {
        let temp = [];
        
        for (let i = 1; i <= x; i++) {
            if (x % i === 0) temp.push(i)
        }
        
        if(temp.length >= 3) answer.push(x)
    }
    
    return answer.length
}