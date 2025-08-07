const char = "#";
const count = 6;
const rows = [];

for (let i = 1; i <= count; i++) {
  rows.push(" ".repeat(count - i) + char.repeat(i + i - 1));
}

let result = "";

for (const row of rows) {
  result += row + "\n";
}

console.log(result);
