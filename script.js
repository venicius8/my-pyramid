const char = "#";
const count = 10;
const rows = [];

for (let i = 0; i < count; i++) {
  rows.push(char.repeat(i + 1));
}

let test = "";

for (const row of rows) {
  test += row + "\n";
}

console.log(test);
