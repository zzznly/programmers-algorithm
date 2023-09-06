function solution(arr, queries) {    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < queries.length; j++) {
            const [s,e] = queries[j];
            
            if (i >= s && i <= e) {
                arr[i] += 1;
            }
        }
    }
    
    return arr;
}