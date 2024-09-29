function solution(my_string, letter) {
    var answer = [...my_string].filter((item) => item !== letter).join("");
    return answer;
}