const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split(/(?=[+-])|(?<=[+-])/);

let isNegative = false;

const answer = arr.reduce((acc, cur) => {
  if (cur === "-") {
    if (!isNegative) {
      isNegative = !isNegative;
    }
    return acc;
  }
  if (cur === "+") {
    return acc;
  }

  if (isNegative) {
    return (acc -= Number(cur));
  } else {
    return (acc += Number(cur));
  }
}, 0);

console.log(answer);
