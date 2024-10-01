function solution(order) {
    var target = "369";
    var str = String(order);
    var answer = [...str].filter((item) => target.indexOf(item) > -1 ).length;
    return answer;
}