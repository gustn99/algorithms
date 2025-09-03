const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, drinksStr] = input;
const numN = Number(n);
const drinks = drinksStr.split(" ").map(Number);

const sortedDrinks = drinks.sort((a, b) => a - b);
let totalAmount = sortedDrinks.pop();

for (let i = 0; i < n - 1; i++) {
  totalAmount += sortedDrinks[i] / 2;
}

console.log(totalAmount);
