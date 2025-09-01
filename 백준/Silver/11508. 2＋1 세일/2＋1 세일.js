const filePath =
  process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, ...costs] = [...input].map(Number);
const sortedCosts = costs.sort((a, b) => b - a);

const groupedCosts = [];
for (let i = 0; i < n; i++) {
  const index = Math.floor(i / 3);
  if (!groupedCosts[index]) groupedCosts[index] = [];
  groupedCosts[index].push(sortedCosts[i]);
}

let totalCost = 0;
groupedCosts.forEach((cost) => {
  cost.length === 3
    ? (totalCost += cost[0] + cost[1])
    : (totalCost += cost.reduce((acc, cur) => acc + cur, 0));
});

console.log(totalCost);
