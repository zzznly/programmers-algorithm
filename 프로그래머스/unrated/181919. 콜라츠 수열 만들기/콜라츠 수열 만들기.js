function solution(n) {
    let answer = [];
    let p = n;
    
    while (p !== 1) {
        answer.push(p);

        if (p % 2 === 0) {
            p /= 2;
        } else {
            p = 3 * p + 1;
        }
    }
    
    answer.push(1)
        
    return answer;
}

