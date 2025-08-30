const filePath = process.platform === "linux" ? "/dev/stdin" : "./solving/input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

// 입력의 마지막 빈 줄을 필터링
const trees = input.filter(tree => tree.length > 0);

const hash = {};
trees.forEach(tree => {
  hash[tree] = (hash[tree] || 0) + 1;
});

const totalCount = trees.length;
const sortedTreeNames = Object.keys(hash).sort();

const result = sortedTreeNames.map(name => {
  const count = hash[name];
  const ratio = (count / totalCount) * 100;
  return `${name} ${ratio.toFixed(4)}`;
});

console.log(result.join("\n"));