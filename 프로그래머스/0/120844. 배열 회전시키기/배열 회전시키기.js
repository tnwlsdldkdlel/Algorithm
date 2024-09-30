function solution(numbers, direction) {
    if (direction === "left") {
        return [...numbers.slice(1), numbers[0]];
    } else if (direction === "right") {
        return [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)];
    }
    return numbers;
}
