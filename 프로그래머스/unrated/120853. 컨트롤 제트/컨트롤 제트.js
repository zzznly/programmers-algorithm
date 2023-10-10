function solution(s) {
    return s.split(' ').reduce((acc, v, i, arr) => 
        v === 'Z' ? acc -= arr[i - 1] : acc + (+v)
    , 0)
}