function solution(my_string) {
    var answer = '';
    let target = [...my_string];
    
    [...my_string].forEach((item) => {
        if(target.indexOf(item) > -1) {
            answer += item;
            target = target.filter((item2) => item2 !== item);
        }
    })
    
    return answer;
}