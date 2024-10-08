function solution(s) {
    var answer = 0;
    let prev = 0;
    s.split(" ").forEach((item) => {
        if(item === "Z") {
            answer -= prev;
        } else {
            item = parseInt(item);
    
            answer += item;    
            prev = item;
        }
        
    })
    
    return answer;
}