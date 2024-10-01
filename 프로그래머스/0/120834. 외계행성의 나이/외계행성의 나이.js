function solution(age) {
    var target = "abcdefghijklmnopqrstuvwxyz"
    var answer = [...String(age)].map((item) => target[item]).join("");
    return answer;
}