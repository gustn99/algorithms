const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const countPerNumber = new Array(input + 1).fill(1000000);

function solution(n, count) {
    if(n === 1) {
        if(count < countPerNumber[1]) {
            countPerNumber[1] = count;
        } else {
            return;
        }
    };
    const changedCount = count + 1;
    
    if(n % 3 === 0 && changedCount < countPerNumber[n / 3]) {
        countPerNumber[n / 3] = changedCount;
        solution(n / 3, changedCount);
    }
    if(n % 2 === 0 && changedCount < countPerNumber[n / 2]) {
        countPerNumber[n / 2] = changedCount;
        solution(n / 2, changedCount);
    }
    if(changedCount < countPerNumber[n - 1]) {
        countPerNumber[n - 1] = changedCount;
        solution(n - 1, changedCount);
    }
}

solution(input, 0);
console.log(countPerNumber[1]);