function solution(box, n) {
    var answer = 1;
    box.forEach((item) => {
        answer *= Math.floor(item / n);
    });
    return answer;
}