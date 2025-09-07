const filePath = process.platform === "linux" ? 0 : "./solving/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [count, lightsStr, ...commandsStr] = input;
const lights = lightsStr.split(" ").map(Number);
const commands = commandsStr.map((c) => c.split(" ").map(Number));

const command = (n, a, b) => {
  switch (n) {
    case 1:
      lights[a - 1] = b;
      break;
    case 2:
      for (let i = a - 1; i < b; i++) {
        lights[i] = lights[i] ? 0 : 1;
      }
      break;
    case 3:
      for (let i = a - 1; i < b; i++) {
        lights[i] = 0;
      }
      break;
    case 4:
      for (let i = a - 1; i < b; i++) {
        lights[i] = 1;
      }
      break;
  }
};

commands.forEach(([n, a, b]) => {
  command(n, a, b);
});
console.log(lights.join(" "));
