const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]); // 첫 번째 입력값을 숫자로 변환

    // 직각 이등변 삼각형 출력
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i)); // 현재 줄에 i개의 '*'을 출력
    }
});
