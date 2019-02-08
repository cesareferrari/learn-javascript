// My solution

let string = '#';

for (let i = 1; i <= 7; i++) {
  console.log(string);
  string += '#';
}


// Book solution

for (let line = '#'; line.length <= 7; line += '#') {
  console.log(line);
}
