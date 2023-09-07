function solution(myStr) {
    return myStr.split(/[a|b|c]/g).filter(v=>v).length ? myStr.split(/[a|b|c]/g).filter(v=>v) : ["EMPTY"]
}