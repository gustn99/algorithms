const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [t, ...arr] = input;

for (let i = 1; i < 2 * t; i += 2) {
  const nums = arr[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(`${nums[0]} ${nums.at(-1)}`);
}
