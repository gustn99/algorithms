const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [k, ...arr] = [...input];
const wArr = arr.map(Number).sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < k; i++) {
  const curMax = wArr[i] * (k - i);
  if (curMax > max) max = curMax;
}

console.log(max);
