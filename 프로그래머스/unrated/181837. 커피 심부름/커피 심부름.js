function solution(order) {
    return order.reduce((p,c,i) => {
        if(c.includes('americano')) return p + 4500
        if(c.includes('cafelatte')) return p + 5000
        if(c === 'anything') return p + 4500
    }, 0);
}