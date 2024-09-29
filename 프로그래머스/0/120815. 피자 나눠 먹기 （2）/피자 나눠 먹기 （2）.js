function solution(n) {
    var answer = lcm(6 , n);
    return Math.floor(answer / 6);
}

function lcm(a,b) {
    return (a * b) / gcd(a,b); 
}

function gcd(a,b) {
    while(b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}