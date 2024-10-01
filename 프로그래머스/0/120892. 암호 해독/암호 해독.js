function solution(cipher, code) {
    var answer = '';
    
   var length = cipher.length;
    for(let i = code - 1 ; i < length ; i += code) {
        answer += cipher[i];
    }
    
    return answer;
}