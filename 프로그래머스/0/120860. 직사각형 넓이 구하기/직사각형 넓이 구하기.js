function solution(dots) {
    var answer = 0;
  
    const x = dots.map(item => item[0]);
    const y = dots.map(item => item[1]);
    
    const w = Math.max(...x) - Math.min(...x);
    const h = Math.max(...y) - Math.min(...y);
    
    return w * h;

}