let result = '';
let size = 15;

for (let i = 0; i < size; i++) {

  for (let ii = 0; ii < size; ii++) {
    if ((i + ii) % 2 === 0) {
      result += " ";
    } else {
      result += "#";
    }
  }

  result += "\n";
}

console.log(result);
