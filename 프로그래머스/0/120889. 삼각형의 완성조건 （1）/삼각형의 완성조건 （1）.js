function solution(sides) {
    var answer = sides.sort((a,b) => b -a);
    return answer[0] < (answer[1] + answer[2]) ? 1 : 2;
}