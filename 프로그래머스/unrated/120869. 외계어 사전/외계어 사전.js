function solution(spell, dic) {
    return dic.filter(word => spell.every(v => word.indexOf(v) > -1 && (word.indexOf(v) === word.lastIndexOf(v)))).length ? 1 : 2
}