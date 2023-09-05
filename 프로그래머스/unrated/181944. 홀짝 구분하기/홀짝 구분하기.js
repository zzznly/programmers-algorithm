const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

const solution = (n) => {
    return n % 2 ? 'is odd' : 'is even'
}

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    
    const result = solution(n);
    console.log(n + ' ' + result)

});