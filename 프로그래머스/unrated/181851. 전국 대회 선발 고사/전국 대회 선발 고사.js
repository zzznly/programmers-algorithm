function solution(rank, attendance) {
    const [a,b,c,...rest] = rank.filter((v, i) => attendance[i] === true).sort((a,b) => a-b).map(v => rank.indexOf(v))
    
    return 10000 * a + 100 * b + c
}