function solution(dots) {
    const [[c, y1], [d, y2], ...restY] = [...dots.sort(([a], [b]) => [a] - [b])]
    const [[x1, a], [x2, b], ...restX] = [...dots.sort(([e, f], [g, h]) => [f] - [h])]
    
    return Math.abs(x1 - x2) * Math.abs(y1 - y2)
}