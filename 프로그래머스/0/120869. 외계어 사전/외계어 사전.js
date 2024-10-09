function solution(spell, dic) {
    var answer = 2;
    
    spell = spell.sort().join('');

    dic.forEach((item) => {
        item = [...item].sort().join('');
        
        if(item.includes(spell)) {
            answer = 1;
            return;
        }
    })
    
    return answer;
}