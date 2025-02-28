const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number);

let min = 1000000000;
let max = -1000000000;

const calculate = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b >> 0,
];

function solution(result, index) {
    if (index === n) {
        max = Math.max(max, result);
        min = Math.min(min, result);
    } else {
        // 모든 경우를 순회하며
        for (let i = 0; i < 4; i++) {
            if (operators[i] === 0) {
                continue;
            }
            operators[i]--;
            solution(calculate[i](result, numbers[index]), index + 1);
            operators[i]++;
        }
    }
}

solution(numbers[0], 1);

console.log(max);
console.log(min);