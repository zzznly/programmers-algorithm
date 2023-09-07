function solution(arr, queries) {           
    for (let i = 0; i < queries.length; i++) {
        const [a,b] = queries[i]
        
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    
    return arr;
}