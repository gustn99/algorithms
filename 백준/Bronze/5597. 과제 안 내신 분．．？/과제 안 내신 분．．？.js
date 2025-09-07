const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const submitted = input.map(Number).sort((a, b) => a - b);

let offset = 1;
const miss = [];

for (let i = 0; i < submitted.length; i++) {
  const current = submitted[i];
  if (current === i + offset) {
    continue;
  } else {
    miss.push(current - 1);
    offset++;
  }
}

console.log(miss[0]);
console.log(miss[1] ?? 30);
