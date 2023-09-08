function solution(arr) {
    let prevArr = arr;
    let idx = 0;
    
    while(true) { // 무한반복
        const transformArr = prevArr.map(v => {
            if (v >= 50 && v % 2 === 0) return v /2
            if (v < 50 && v % 2 === 1)  return v*2+1
            return v
        })
        
        const compareArr = prevArr.every((v,i) => v === transformArr[i])
        if (compareArr) break;
        idx++;
        
        prevArr = transformArr        
    }
    
    return idx
}