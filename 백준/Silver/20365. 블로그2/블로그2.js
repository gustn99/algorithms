const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, str] = input;

const bArr = str.match(/B+/g) || [];
const rArr = str.match(/R+/g) || [];
const bCount = bArr.length;
const rCount = rArr.length;

let count;

if (bCount >= rCount) {
  count = rCount + 1;
} else {
  count = bCount + 1;
}

console.log(count);
