const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const hash = input.reduce((acc, cur) => {
  acc[cur] ? acc[cur]++ : (acc[cur] = 1);
  return acc;
}, {});

const totalCount = Object.values(hash).reduce((acc, cur) => acc + cur, 0);

const names = Object.keys(hash).sort();
const result = names.reduce((acc, name) => {
  const ratio = hash[name] / totalCount;
  const perc = (ratio * 100).toFixed(4);

  acc.push([name, perc]);

  return acc;
}, []);

const answer = result
  .sort((a, b) => a[0] - b[0])
  .map(([name, perc]) => `${name} ${perc}`)
  .join("\n");
console.log(answer);