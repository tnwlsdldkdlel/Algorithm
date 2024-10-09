function solution(numbers) {
    var answer = '';
    const alphabat = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    var temp = '';
    [...numbers].forEach((item) => {
        temp += item;
        
        if(alphabat.indexOf(temp) > -1) {
            answer += alphabat.indexOf(temp);
            temp = '';
        }
    })
    
    return parseInt(answer);
}