const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const times = input[1].split(" ").map(Number);
const sortedTimes = times.sort((a, b) => a - b);

let cumTime = 0;
let totalTime = 0;

sortedTimes.forEach((time) => {
  totalTime += time + cumTime;
  cumTime += time;
});

console.log(totalTime);
