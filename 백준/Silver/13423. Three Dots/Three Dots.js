const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);

for(let i = 0; i < t; i++) {
    const n = Number(input[2*i + 1]);
    const numbers = input[2*i + 2].split(" ").map(Number);
    let result = 0;
    
    for(let j = 0; j < n; j++) {
        let d = [];
        
        for(let k = 0; k < n; k++) {
            d.push(Math.abs(numbers[j] - numbers[k]));
        }
        
        result += Math.ceil(d.length - new Set(d).size);
    }
    
    console.log(result);
}