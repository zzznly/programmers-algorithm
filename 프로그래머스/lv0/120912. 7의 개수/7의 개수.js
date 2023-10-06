function solution(array) {
    let cnt = 0;
    
    array.join('').split('').forEach(v => {
        if (+v === 7) cnt++;
    })
    
    return cnt;
}