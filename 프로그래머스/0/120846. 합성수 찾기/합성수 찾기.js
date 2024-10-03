function solution(n) {
    var answer = 0;
    
    for(let i = 4 ; i <= n ; i++) {
       let count = 0 ;
        
        for(let y = 1 ; y <= Math.sqrt(i); y++) {
            if(i % y === 0) {
                count ++;   
                
                if(i !== i / y) {
                    count ++;
                }
            }
        }

        if(count >= 3) {
            answer ++;
        }
    }
    
    
    return answer;
}