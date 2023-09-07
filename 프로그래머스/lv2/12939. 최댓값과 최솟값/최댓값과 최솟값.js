const solution = (s) => {
    
    const split = [...s.split(' ')].map(v => +v);
    
    return Math.min(...split).toString() + ' ' + Math.max(...split).toString()
}