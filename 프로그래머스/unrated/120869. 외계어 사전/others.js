function solution(spell, dic) {
  return dic.some(word => [...word].sort().join() === spell.sort().join())
    ? 1
    : 2;
}
// join() 대신 toString() 도 가능
