function solution(my_string) {
    var answer = [...my_string].filter((item) => !isNaN(item))
    .map(Number)
    .sort((a,b) => a-b);
    return answer;
}