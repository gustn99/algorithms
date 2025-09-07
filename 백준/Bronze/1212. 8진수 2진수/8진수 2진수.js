const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const vkfwlstn = input[0];
let dlwlstn = "";

for (let i = 0; i < vkfwlstn.length; i++) {
  let num = Number(vkfwlstn[i]);
  const arr = [];

  while (num >= 1) {
    arr.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  while (i > 0 && arr.length < 3) {
    arr.unshift(0);
  }

  dlwlstn += arr.join("");
}

console.log(dlwlstn || "0");
