function solution(arr, k) {
    let answer = [];
    
    const set = [...new Set(arr)];
    
    for (let i = 0; i < k; i++) {
        answer.push(set[i] ?? -1)
    }
    
    return answer;
}