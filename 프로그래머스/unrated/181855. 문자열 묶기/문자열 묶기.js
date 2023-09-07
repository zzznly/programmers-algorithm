function solution(strArr) {
    const group = {}
    
    for(let x of strArr) {
        const len = x.length;
        group[len] = group[len] ?? []
        group[len].push(x)
    }
    
    const values = Object.values(group).map(v => v.length)
    
    return Math.max(...values)
}