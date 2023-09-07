function solution(arr) {
    let ans = [];
    
    const s = arr.indexOf(2);
    const l = arr.lastIndexOf(2);
    
    ans = arr.slice(s, l+1);
    
    return ans.length ? ans : [-1];
}