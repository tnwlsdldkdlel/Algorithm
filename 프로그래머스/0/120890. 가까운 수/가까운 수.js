function solution(array, n) {
    var answer = 0;
    let min = Infinity;
    
    [...array].forEach((item) => {
       var temp = Math.abs(item - n);
       
        if(temp < min || (temp === min && item < answer)) {
          min = temp;
            answer = item;
        }
    });
    
    return answer;
}