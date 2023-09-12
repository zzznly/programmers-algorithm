function solution(l, r) {
    const nums = Array.from({length: r-l+1}, (_, i) => i+l)    
    const strNums = nums.map(num => num.toString())
    const strNumsFilter = strNums.filter((v) => {
        return [...v].every(x => x === '0' || x === '5')
    }).map(v => +v)
    
    return strNumsFilter.length ? strNumsFilter : [-1]
}