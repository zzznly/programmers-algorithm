function solution(n, slicer, num_list) {
    const [a,b,c] = slicer;
    
    const calc = {
        1: v => v.slice(0, b+1),
        2: v => v.slice(a),
        3: v => v.slice(a, b+1),
        4: v => v.slice(a, b+1).filter((_, i) => i % c === 0)
    }
    
    return calc[n](num_list);
}