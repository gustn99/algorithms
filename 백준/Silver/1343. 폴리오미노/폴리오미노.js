const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const polyomino = input[0].split(/(\.+)/);

const replaced = polyomino.map((p) => {
  let length = p.length;
  if (p.includes("X") && length % 2 == 0) {
    const aCount = Math.floor(length / 4);
    const bCount = (length - 4 * aCount) / 2;

    return "AAAA".repeat(aCount) + "BB".repeat(bCount);
  }
  return p;
});

const str = replaced.join("");
const answer = str.includes("X") ? -1 : str;

console.log(answer);
