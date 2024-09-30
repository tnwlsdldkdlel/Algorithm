function solution(n) {
    var answer =2;
    var val = 0;
    
    let i = 1;
    while(val <= n) {
        val = Math.pow(i, 2);

        if(val === n) {
            answer = 1;
            break;
        }
        
        i++;
    }
    
    return answer;
}