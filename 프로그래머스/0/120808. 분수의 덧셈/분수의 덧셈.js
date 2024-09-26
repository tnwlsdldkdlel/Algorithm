function solution(numer1, denom1, numer2, denom2) {
    var answer = 0;
    var commonDenom = denom1 * denom2;
    var number = (numer1 * denom2) + (numer2 * denom1)

    const test = gcd(number, commonDenom);
    
    return [number / test, commonDenom / test];
}

function gcd(a ,b) {
    while(b) {
        [a , b] = [b, a%b];
    }
    
    return a;
}