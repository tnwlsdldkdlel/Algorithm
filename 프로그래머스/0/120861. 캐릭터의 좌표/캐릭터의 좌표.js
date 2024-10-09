function solution(keyinput, board) {
    var answer = [0, 0];
    var [x_limit, y_limit] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    keyinput.forEach((item) => {
        switch(item) {
            case "left":
                if (answer[0] > -x_limit) {
                    answer[0] -= 1;
                }
                break;
            case "right":
                if (answer[0] < x_limit) {
                    answer[0] += 1;
                }
                break;
            case "up":
                if (answer[1] < y_limit) {
                    answer[1] += 1;
                }
                break;
            case "down":
                if (answer[1] > -y_limit) {
                    answer[1] -= 1;
                }
                break;
        }
    });
    
    return answer;
}
