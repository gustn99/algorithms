const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, d, c] = input;

const distanceArr = d.split(" ").map(Number);
const costArr = c
  .split(" ")
  .map(Number)
  .filter((_, i) => i < n - 1);

const groupedCost = [];
for (let i = 0; i < n - 1; i++) {
  const currentCost = costArr[i];
  const currentDistance = distanceArr[i];

  if (groupedCost.length === 0) {
    groupedCost.push([currentCost, currentDistance]);
    continue;
  }

  if (groupedCost.at(-1)[0] < currentCost) {
    groupedCost.at(-1)[1] += currentDistance;
  } else {
    groupedCost.push([currentCost, currentDistance]);
  }
}

let totalCost = 0;

for (let i = 0; i < groupedCost.length; i++) {
  const [cost, distance] = groupedCost[i];
  totalCost += cost * distance;
}

console.log(totalCost);
