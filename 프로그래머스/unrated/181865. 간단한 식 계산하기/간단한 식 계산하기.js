const ops = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
}

const solution = (binomial) => {
    const [a, op, b] = binomial.split(' ');
    
    return ops[op](+a,+b)
}