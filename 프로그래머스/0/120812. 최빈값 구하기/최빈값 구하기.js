function solution(array) {
    const frequency = Array.from({ length: Math.max(...array) + 1 }, () => 0);
    
    // 각 숫자의 빈도 계산
    array.forEach((item) => {
        frequency[item]++;
    });
    
    let maxCount = 0;
    let mode = -1; // 최빈값 초기값
    let modeCount = 0; // 최빈값의 빈도수

    // 최빈값 찾기
    frequency.forEach((count, index) => {
        if (count > maxCount) {
            maxCount = count;
            mode = index;
            modeCount = 1;
        } else if (count === maxCount && count > 0) {
            modeCount++; // 같은 빈도의 수 발견
        }
    });

    // 최빈값이 여러 개일 경우 -1 반환
    return modeCount > 1 ? -1 : mode;
}
