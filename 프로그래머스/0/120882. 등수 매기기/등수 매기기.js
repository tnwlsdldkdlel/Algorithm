function solution(score) {
    let answer = [];
    
    // 각 학생의 평균 점수를 계산하고, 그에 따른 인덱스를 저장
    const averages = score.map((item, index) => {
        const [a, b] = item;
        return { index: index, avg: (a + b) / 2 };
    });
    
    // 평균 점수를 기준으로 내림차순으로 정렬
    const sorted = [...averages].sort((a, b) => b.avg - a.avg);
    
    // 각 학생의 등수를 저장 (공동 등수 처리)
    let rank = 1;
    sorted.forEach((item, i) => {
        // 이전 학생과 평균 점수가 같으면 같은 등수
        if (i > 0 && sorted[i].avg === sorted[i - 1].avg) {
            answer[item.index] = rank;
        } else {
            rank = i + 1;  // 등수 갱신
            answer[item.index] = rank;
        }
    });
    
    return answer;
}
