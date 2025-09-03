const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [a, b] = input[0].split(" ").map(Number);

// 1: append
// 2: double
const queue = [];

while (true) {
  if (b < a) {
    queue.unshift(-1);
    break;
  }
  if (b === a) {
    break;
  }

  if (b % 2 === 0) {
    queue.unshift(2);
    b /= 2;
    continue;
  }

  if (b % 10 === 1) {
    queue.unshift(1);
    b = Math.floor(b / 10);
    continue;
  }

  if ((b % 10) % 2 === 1) {
    queue.unshift(-1);
    break;
  }
}

let count = queue.length + 1;
if (queue[0] === -1) count = -1;

console.log(count);
