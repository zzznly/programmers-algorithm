function solution(my_string) {
    const array = Array(52).fill(0);

    [...my_string].forEach(char => {
        let charIdx = char.charCodeAt() - (char.charCodeAt() >= 97 ? 71 : 65);
        array[charIdx]++;
    })

    return array
}