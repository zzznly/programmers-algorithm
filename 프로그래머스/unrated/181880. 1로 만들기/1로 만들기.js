function solution(num_list) {
    let answer = 0;
    
    for (let x of num_list) {
        while (x !== 1) {
            if (x % 2 === 0) x /= 2;
            else x = (x - 1) / 2;
            answer++;
        }
    }
    
    return answer
}