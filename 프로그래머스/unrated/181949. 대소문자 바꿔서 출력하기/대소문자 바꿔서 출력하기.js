const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const res = [...str].map(v => {
        return v.match(/[A-Z]/g) ? v.toLowerCase() : v.toUpperCase()
    });
    
    console.log(res.join(''))
});