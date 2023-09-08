function solution(arr) {
    const pow = Array.from({length: 10}, (_, i) => Math.pow(2,i));
    
    let idx
    for (let i = 0; i < pow.length; i++) {
        if (arr.length < pow[i]) break;
        idx = pow[i];
    }
    
    const zeros = Array(idx).fill(0)
    
    return [...arr, ...zeros.slice(0, idx - arr.length)]
}