for(let i = 0; i <= 12; i = i + 2) {
  console.log(i);
}


let result = 1;
for (let counter = 0; counter < 10; counter ++) {
  result = result * 2;
}

console.log(result);  // => 1024



// Breaking out of a loop

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

// => 21
