function solution(my_str, n) {
    var answer = [];
    var target = [...my_str];
    
    while(target.length > 0) {
     answer.push(target.splice(0, n).join(""));   
    }
    
    return answer;
}