function solution(my_string) {    
    const split = my_string.split(' ');
    let ans = Number(split[0]);
    
    for (let i = 1; i < split.length; i += 2) {
        split[i] === '+' ? ans += Number(split[i+1]) : ans -= Number(split[i+1])
    }
    
    return ans
}