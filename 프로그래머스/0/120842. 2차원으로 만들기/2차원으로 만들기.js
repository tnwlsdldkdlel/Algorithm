function solution(num_list, n) {
    var answer = [];
    let target = [];
    num_list.forEach((item, index) => {
        if(target.length === n) {
            answer.push(target);
            target = [];
        }
        
        target.push(item);
        
        if(index === num_list.length - 1) {
            answer.push(target);
        }
        
        
    })
    
    return answer;
}