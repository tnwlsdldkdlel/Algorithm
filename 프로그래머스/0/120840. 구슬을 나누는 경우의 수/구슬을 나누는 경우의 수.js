function solution(balls, share) {
    return factorial(BigInt(balls)) / (factorial(BigInt(share)) * factorial(BigInt(balls - share)));
}

function factorial(n) {
    if (n === 0n || n === 1n) return 1n; 
    return n * factorial(n - 1n);
}
