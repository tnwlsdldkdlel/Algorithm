function solution(s) {
    var answer = '';
    var target = [...new Set(s)];
    var count = [];
    
    for(let i = 0 ; i < target.length; i++) {
        count[i] = 0;
    }
    
    [...s].forEach((item) => {
       var index = target.indexOf(item);
        count[index] ++;
    });
    
    count.forEach((item, index) => {
        if(item === 1) {
            answer += target[index];
        }
    })
    
    
    console.log(answer);
    
    return [...answer].sort().join('');
}