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
const minCost = Math.min(...costArr);

let chargedOil = 0;
let leftDistance = distanceArr.reduce((acc, cur) => acc + cur, 0);
let totalCost = 0;

for (let i = 0; i < n - 1; i++) {
  const currentDistance = distanceArr[i];

  if (distanceArr[i] < chargedOil) {
    chargedOil -= currentDistance;
    leftDistance -= currentDistance;
    continue;
  }

  const currentCost = costArr[i];

  if (currentCost > minCost) {
    chargedOil += currentDistance;
    leftDistance -= currentDistance;
    totalCost += currentDistance * currentCost;
  } else {
    totalCost += leftDistance * currentCost;
    break;
  }
}

console.log(totalCost);
