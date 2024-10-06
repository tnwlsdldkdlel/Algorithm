function solution(i, j, k) {
    var answer = 0;
    
    for(let index = i ; i <= j  ; i++) {
        let target = String(i);

        if(target.length == 1 ) {
            if(target === String(k)) {
                answer ++;
            }
        } else {
            [...target].forEach((item) => {
               
                if(item === String(k)) {
                    answer ++;
                }
            })
        }
    }
    
    return answer;
}