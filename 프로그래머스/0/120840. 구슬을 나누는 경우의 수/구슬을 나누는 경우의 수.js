function solution(balls, share) {
    var answer = 0;
    var value = factorial(balls) / (factorial(share) * factorial(balls - share));
    return Math.round(value);
}


function factorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    
    return n * factorial(n-1);
}