function solution(n) {
    let i = 1;
    let factorial = 1;

    while (factorial <= n) {
        i++;
        factorial *= i; // i!을 계산
    }

    return i - 1; // i가 n보다 커지면 i-1을 반환
}