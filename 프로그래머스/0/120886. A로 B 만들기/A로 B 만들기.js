function solution(before, after) {
    var target1 = [...before].sort().join('');
    var target2 = [...after].sort().join('');
    
    return target1 === target2 ? 1 : 0;
}