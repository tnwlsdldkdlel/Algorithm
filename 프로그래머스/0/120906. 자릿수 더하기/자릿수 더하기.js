function solution(n) {
    n = n.toString();
    var answer = [...n].reduce((a,b) => parseInt(a) + parseInt(b), 0);
    
    return answer;
}