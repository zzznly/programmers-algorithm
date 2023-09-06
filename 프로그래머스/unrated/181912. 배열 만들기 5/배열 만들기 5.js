function solution(intStrs, k, s, l) {
    return intStrs.map(v => +[...v].slice(s, s+l).join('')).filter(v => v > k);
}