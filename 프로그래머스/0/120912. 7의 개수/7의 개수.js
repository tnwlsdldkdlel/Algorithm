function solution(array) {
    var answer = 0;
    
    array.forEach((item) => {
        if(item / 10 < 1) {
            if(item === 7) {
                answer ++;
            }
        } else if(item / 10 > 1) {
            [...String(item)].forEach((temp) => {
                if(temp === '7') {
                    answer ++;
                }
            })
        }
    })
    
    return answer;
}