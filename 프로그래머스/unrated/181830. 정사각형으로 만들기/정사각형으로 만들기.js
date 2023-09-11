function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    
    if (row > col) {
        arr = arr.map(v => [...v, ...Array(row - col).fill(0)])
    } else if (col > row) {
        arr.push(...Array(col - row).fill(Array(col).fill(0)))
    }
    
    return arr
}