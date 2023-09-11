function solution(str_list) {
    let answer = [];
    
    const idx = str_list.findIndex(v => v === 'l' || v === 'r');
    
    if (idx === -1) return [];
    if (str_list[idx] === 'l') answer = str_list.slice(0, idx)
    else answer = str_list.slice(idx + 1)
    
    return answer;
}