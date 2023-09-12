function solution(picture, k) {
    
    let answer = [];
    
    picture = picture.map(row => {
        let trans_row = ''
        for(let pix of row) {
            trans_row += Array(k).fill(pix).join('');
        }
        
        return trans_row
    })
    
    for(let row of picture) {
        for(let i=1; i<=k ; i++) {
            answer.push(row)
        }
    }
    
    return answer
}