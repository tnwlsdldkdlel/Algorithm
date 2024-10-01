function solution(emergency) {
    const test = [...emergency].sort((a,b) => b -a);
  
    var answer = emergency.map((item) => test.indexOf(item)+1);
    return answer;
}