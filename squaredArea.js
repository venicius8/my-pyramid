let side = 8;

let area = [];

area.push("#".repeat(side));

for (let i = 0; i < side - 2; i++) {
  area.push("#" + " ".repeat(side - 2) + "#");
}

area.push("#".repeat(side));

let result = "";

for (const row of area) {
  result += row + "\n";
}

console.log(result);
