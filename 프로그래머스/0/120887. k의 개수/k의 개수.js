function solution(i, j, k) {
    var answer = '';
    
    for(let index = i ; index <= j; index++) {
        answer += String(index);
    }
    
    return answer.split(k).length - 1;
}