const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, tStr] = input;
const sortedTArr = tStr
  .split(" ")
  .map(BigInt)
  .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

let min = BigInt(0);
let length = sortedTArr.length;

if (length % 2 === 1) {
  min = sortedTArr.pop();
  length--;
}

for (let i = 0; i < length / 2; i++) {
  const left = sortedTArr[i];
  const right = sortedTArr[length - 1 - i];

  if (left + right > min) {
    min = left + right;
  }
}

console.log(min.toString());
