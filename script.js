const char = "#";
const count = 10;
const rows = [];

for (let i = 0; i < count; i++) {
  rows.push(char.repeat(i + 1));
}

let result = "";

for (const row of rows) {
  result += row + "\n";
}

console.log(result);
