function solution(quiz) {
    var answer = [];
    
    quiz.forEach((item) => {
        const target = item.split(" = ")[0]
        
        if(String(eval(target)) === item.split(" = ")[1]) {
            answer.push("O")
        } else {
            answer.push("X")
        }
    })
    return answer;
}