const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let str = input[0].split(/(?=K)|(?<=K)/);
let maxArr = [];
let minArr = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] !== "K") {
    const times = str[i].length - 1;
    minArr.push(BigInt(10) ** BigInt(times));
    if (i === str.length - 1) {
      maxArr.push("1".repeat(times + 1));
    }
    continue;
  }

  minArr.push(5);
  if (!str[i - 1] || str[i - 1] === "K") {
    maxArr.push(5);
  } else {
    const times = str[i - 1].length;
    maxArr.push(BigInt(5) * BigInt(10) ** BigInt(times));
  }
}

console.log(maxArr.join(""));
console.log(minArr.join(""));
