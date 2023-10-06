function solution(emergency) {
    const org = [...emergency]
    const sort = [...emergency.sort((a,b) => b-a)]
    
    return org.map(v => sort.indexOf(v) + 1)
}