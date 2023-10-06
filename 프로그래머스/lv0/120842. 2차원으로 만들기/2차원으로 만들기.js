function solution(num_list, n) {
    let answer = [];
    
    for (let j = 0; j < num_list.length; j+=n) {
        let arr = [];
    
        for (let i = j; i < n+j; i++) {
            arr.push(num_list[i])
        }
    
        answer.push(arr)
    }
    
    return answer;
}