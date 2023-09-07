function solution(arr, queries) {
    queries.forEach(([s,e,k], i) => {
        arr = arr.map((v,i) => i >= s && i <= e && i % k === 0 ? v + 1: v)
    })
    return arr
}