function solution(q, r, code) {
    return [...code].reduce((p,c,i) => i % q === r ? p + c : p, '');
}