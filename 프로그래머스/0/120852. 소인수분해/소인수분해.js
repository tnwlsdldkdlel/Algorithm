function solution(n) {
    var answer = [];
    let target = 2;

    while (n > 1) {
        if (n % target === 0) {
            answer.push(target);
            n /= target;
        } else {
            target++;
        }
    }

    return [... new Set(answer)];
}