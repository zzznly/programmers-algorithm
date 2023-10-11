function solution(sides) {
    let cnt = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    for (let i = max - min + 1; i <= max; i++) {
        cnt++;   
    }
    
    for (let i = max + 1; i < max + min; i++) {
        cnt++;
    }
    
    return cnt
}