function solution(numbers, k) {
    var answer = 0;
    
    var index = 0;
    var count = 1;
    
    while(count != k) {
        index += 2;
        
        if(index > (numbers.length-1)) {
            index -= (numbers.length);
        }
        
        count ++;
    }
    
    return numbers[index];
}