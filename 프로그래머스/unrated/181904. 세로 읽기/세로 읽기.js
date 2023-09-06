function solution(my_string, m, c) {
    let arr = [];
    
    for (let i = 0; i < parseInt(my_string.length / m); i++) {
        arr.push(c + m * i)
    }
    
    return arr.map(i => my_string[i-1]).join('')
}