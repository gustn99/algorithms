const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const change = Number(input);
let min = 1000000;

const maxCount = Math.floor(change / 2);

for (let coin2Count = 0; coin2Count <= maxCount; coin2Count++) {
  const remains = change - 2 * coin2Count;

  if (remains % 5 === 0) {
    const coin5Count = Math.floor(remains / 5);
    min = Math.min(min, coin2Count + coin5Count);
  }
}

if (min === 1000000) {
  min = -1;
}

console.log(min);
