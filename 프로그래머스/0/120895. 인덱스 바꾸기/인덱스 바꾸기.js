function solution(my_string, num1, num2) {
    var temp = [...my_string];
    var temp2 = temp[num1];
    temp[num1] = temp[num2];
    temp[num2] = temp2;

    return temp.join("");
}