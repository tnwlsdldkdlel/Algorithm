function solution(sides) {
    var answer = 0;
    var [a, b] = sides;
    var target = a > b ? a : b;
    
    // 1. target이 큰 경우
    var temp = target;
    while(true) {
        if(target === a) {
            if(target < b + temp) {
                answer ++;
                temp --;
            } else {
                break;
            }
        } else {
            if(target < a + temp) {
                answer ++;
                temp --;
            } else { 
                break;
            }
        }
    }
    
    // 2. temp가 큰 경우
    var x = target + 1;
    while(true) {
        if(x < a + b) {
            answer++;
            x++;
        } else {
            break;
        }
    }
    
    return answer;
}